import fs from 'fs-extra'
import chalk from 'chalk'

/**
 * Get the field type from the prototype's field
 */
type FieldType<Name extends keyof (typeof TokensDictionaryImpl)['prototype']> =
    (typeof TokensDictionaryImpl)['prototype'][Name]

/**
 * Registered generator that handles
 * * output path of the generated token dictionary
 * * when to run the generator
 * * what to build into the tokens dictionary
 */
type RegisteredGenerator = {
    /**
     * Name of the registered output
     */
    name: string
    /**
     * File path of the registered output
     */
    file: string
    /**
     * Matcher to perform a boolean check on whether
     * or not to run the registered output on the
     * current variable from the logic given
     */
    matcher: ({ properties }) => boolean
    /**
     * Generator function to generate the dictionary
     * that will be output as a json file
     */
    generator: ({ tokens, variable }) => void
    /**
     * Current value of the tokens dictionary
     */
    tokens: any
}

/**
 * Class that handles the implementation of the tokens dictionary
 * Takes in a config of variables and output
 * Outputs can be registered before run command
 * Runs through the variables and outputs token dictionaries from
 * the registered outputs, determining when to run them through matchers
 *
 * See `../generators` for each registered generator
 * See `../config` for including each registered generator in the runtime
 * See `../run` for the run command
 */
class TokensDictionaryImpl {
    // Variables from Figma
    // Currently uses the variables2json plugin
    public variables: typeof import('../../input/variables.json')

    // Output folder for all generated tokens
    public output: string

    // Collection records to offer references to values
    public collections: {
        [key: string]: {
            [key: string]: any
        }
    }

    // List of registered generators to run through each variable
    public registeredGenerators: RegisteredGenerator[] = []

    /**
     * Register a config with the tokens generator
     *
     * @param args - config
     * @param args.variables - variables from figma
     * @param args.output - output container folder for all generators
     */
    public config({
        variables,
        output,
    }: {
        variables: FieldType<'variables'>
        output: FieldType<'output'>
    }) {
        this.variables = variables
        this.output = output

        // Set referenced collections
        this.collections = this.referCollections(variables)
    }

    /**
     * Register a generator with the tokens dictionary
     *
     * @param args - generator config
     * @param args.name - Name of the registered output
     * @param args.file - File path of the registered output
     * @param args.matcher - Matcher to perform a boolean check
     * @param args.generator - Generator function to generate the dictionary
     * @param args.tokens - Current value of the tokens dictionary
     */
    public registerGenerator({
        name,
        file,
        matcher,
        generator,
    }: FieldType<'registeredGenerators'>[number]) {
        this.registeredGenerators.push({ name, file, matcher, generator, tokens: {} })
    }

    /**
     * Reference collections to make them easier to grab value from, if needed
     * Useful for getting primitive values from referenced values in others
     *
     * @example
     * `this.collections['colorTokens']['Dark']['action']['default']`
     * @param variables
     */
    public referCollections(variables: FieldType<'variables'>) {
        // Reduce collections...
        return variables.collections.reduce(
            (collections, collection) => ({
                ...collections,
                // Define collection as reduced mode...
                [collection.name]: collection.modes.reduce(
                    (modes, mode) => ({
                        // Define mode as reduced variables...
                        ...mode.variables.reduce(
                            (variables, variable) => ({
                                ...variables,
                                // Define value as value
                                [variable.name]: variable.value,
                            }),
                            {},
                        ),
                    }),
                    {},
                ),
            }),
            {},
        )
    }

    /**
     * Runs the generator
     */
    public run() {
        // Reducer for each collection...
        this.variables.collections.reduce((collections, collection) => {
            // Reducer for each mode...
            collection.modes.reduce((modes, mode) => {
                // Reducer for each variable...
                mode.variables.reduce((variables, variable) => {
                    // For each registered generator...
                    this.registeredGenerators.forEach((registeredGenerator) => {
                        // Get current state properties
                        const properties = {
                            collection,
                            mode,
                            variable,
                        }

                        // If registered generator matches current properties,
                        if (registeredGenerator.matcher({ properties })) {
                            // Run generator
                            registeredGenerator.generator({
                                // Build current tokens
                                tokens: registeredGenerator.tokens,
                                // Use current variable
                                variable,
                            })
                        }
                    })

                    return variables
                }, {})

                return modes
            }, {})

            return collections
        }, {})

        process.stdout.write(`\n`)

        // Get all directories under output directory
        const directories = fs
            .readdirSync(this.output, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())

        // For each directory...
        directories.forEach((directory) => {
            // If directory is custom directory,
            if (directory.name !== 'custom') {
                // Remove the directory
                fs.removeSync(`${this.output}/${directory.name}`)
            }
        })

        // For each registered generator...
        this.registeredGenerators.forEach((registeredGenerator) => {
            try {
                // Get total output path from the token dictionary config
                // and the registered generator config output
                const output = `${this.output}/${registeredGenerator.file}`

                process.stdout.write(`    ${chalk.white(registeredGenerator.file)}`)

                // Output generated tokens as JSON
                fs.outputFileSync(output, JSON.stringify(registeredGenerator.tokens, null, 4))

                // Success!!
                process.stdout.write(chalk.green(` (✔)\n`))
            } catch (err) {
                // Failure...
                process.stdout.write(chalk.red(` (✘)\n`))

                // Output error
                process.stdout.write(chalk.red(`\n`))
                process.stdout.write(chalk.red(err))
                process.stdout.write(chalk.red(`\n`))
            }
        })
    }
}

// Globally instanced tokens dictionary
const TokensDictionary = new TokensDictionaryImpl()

export { TokensDictionary }

export default TokensDictionary
