import fs from 'node:fs/promises'
import path from 'node:path'
import glob from 'glob'
import util from 'util'
import Mustache from 'mustache'
import chalk from 'chalk'

import Queue from '../utils/classes/Queue.js'
import renameFilter from '../utils/functions/renameFilter.js'
import getComponentName from '../utils/functions/getComponentName.js'

import { workspaces } from '@layars/root/utils/workspaces.js'

const type: 'wc' | 'react' | string = process.env.GEN_TYPE || 'wc'

const options = {
    svgDir: `${workspaces['@layars/layars-icons-svgs'].path}/svgs`,
    glob: '/**/*.svg',
    outputDir: `${workspaces[`@layars/layars-icons-${type}`].path}/src`,
}

const globAsync = util.promisify(glob)

async function generateIndex() {
    process.stdout.write(`\n    ${chalk.blue('Generating "/src/index.ts":')}\n`)

    let consoleOutput: string[] = []

    const icons = await globAsync(path.join(options.outputDir, '*'))

    let index = icons
        .map((file) => {
            const name = path.basename(file)

            consoleOutput.push(chalk.white('.'))

            return `export * from './${name}/index.js'\n`
        })
        .join('')

    consoleOutput.forEach((log, index) => {
        if (index % 100 === 0) {
            process.stdout.write('\n        ')
        }

        process.stdout.write(log)
    })

    await fs.writeFile(path.join(options.outputDir, 'index.ts'), index)

    process.stdout.write(` ${chalk.green('(Success)')}\n`)
}

// @ts-ignore @todo
async function worker({ svgPath, templates }) {
    let consoleOutput = []

    try {
        const normalizedSvgPath = path.normalize(svgPath)
        const svgPathObj = path.parse(normalizedSvgPath)

        const kebabCaseName = svgPathObj.name

        const destPath = renameFilter(svgPathObj)

        consoleOutput.push(chalk.white(`        ${kebabCaseName} => `))

        const pascalCaseName = getComponentName(destPath)

        consoleOutput.push(chalk.white(pascalCaseName))

        const outputFileDir = path.join(options.outputDir, `layars-${kebabCaseName}`)

        await fs.mkdir(outputFileDir)

        const files = {
            component: Mustache.render(templates.component, {
                kebabCaseName,
                pascalCaseName,
            }),
            index: Mustache.render(templates.index, {
                kebabCaseName,
                pascalCaseName,
            }),
            storybook: Mustache.render(templates.storybook, {
                kebabCaseName,
                pascalCaseName,
            }),
        }

        const paths = {
            component: path.join(outputFileDir, `layars-${kebabCaseName}.ts`),
            index: path.join(outputFileDir, 'index.ts'),
            storybook: path.join(outputFileDir, `layars-${kebabCaseName}.stories.ts`),
        }

        await fs.writeFile(paths.component, files.component)
        await fs.writeFile(paths.index, files.index)
        await fs.writeFile(paths.storybook, files.storybook)

        consoleOutput.push(`${chalk.green(' (Success)')}\n`)
    } catch (err) {
        consoleOutput.push(`${chalk.red(' (Error)')}\n`)
        consoleOutput.push(`\n${chalk.red(err)}\n\n`)
    } finally {
        for (const log of consoleOutput) {
            process.stdout.write(log)
        }
    }
}

async function main() {
    try {
        process.stdout.write(`    ${chalk.blue('Preparing output directory...')}`)

        try {
            await fs.access(options.outputDir)

            await fs.rm(options.outputDir, { recursive: true })
        } finally {
            await fs.mkdir(options.outputDir)
        }

        process.stdout.write(`  ${chalk.green('(Success)')}\n\n`)

        process.stdout.write(`    ${chalk.blue(`Generating ${type} "/src"...`)}\n`)

        const [svgPaths, templates] = await Promise.all([
            globAsync(path.join(options.svgDir, options.glob)),
            {
                component: await fs.readFile(
                    path.join(
                        options.outputDir,
                        '../templates/icon-template',
                        'icon-template.ts.template',
                    ),
                    {
                        encoding: 'utf8',
                    },
                ),
                index: await fs.readFile(
                    path.join(options.outputDir, '../templates/icon-template', 'index.ts.template'),
                    {
                        encoding: 'utf8',
                    },
                ),
                storybook: await fs.readFile(
                    path.join(
                        options.outputDir,
                        '../templates/icon-template',
                        'icon-template.stories.ts.template',
                    ),
                    {
                        encoding: 'utf8',
                    },
                ),
            },
        ])

        const queue = new Queue(
            // @ts-ignore @todo
            (svgPath) =>
                worker({
                    svgPath,
                    templates,
                }),
            { concurrency: 8 },
        )

        queue.push(svgPaths)

        await queue.wait()

        await generateIndex()

        process.stdout.write(`\n    ${chalk.green(`Successfully generated ${type} icons!`)}\n\n`)
    } catch (err) {
        process.stderr.write(`\n${chalk.red(err)}\n\n`)
    }
}

main()
