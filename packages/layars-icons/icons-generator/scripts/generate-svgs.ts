import fs from 'node:fs/promises'
import path from 'node:path'
import globSync from 'glob'
import util from 'util'
import chalk from 'chalk'

import { optimize } from 'svgo'

import svgo_config from '../.config/svgo.config.js'

import { workspaces } from '@layars/root/utils/workspaces.js'

const workspace = workspaces['@layars/icons-svgs']

const config = {
    svgDir: `${workspace.path}/input/svgs`,
    glob: '/**/*.svg',
    outputDir: `${workspace.path}/svgs`,
}

const glob = util.promisify(globSync)

const svgo = {
    optimize: (svg: string) => optimize(svg, svgo_config),
}

async function generate() {
    try {
        process.stdout.write(`    ${chalk.blue('Preparing output directory...')}`)

        try {
            await fs.access(options.outputDir)

            await fs.rm(options.outputDir, { recursive: true })
        } finally {
            await fs.mkdir(options.outputDir)
        }

        process.stdout.write(`  ${chalk.green('(Success)')}\n\n`)

        process.stdout.write(`    ${chalk.blue('Optimizing "svgs"...')}\n\n`)

        const [svgPaths] = await Promise.all([globAsync(path.join(options.svgDir, options.glob))])

        const queue = new Queue(
            (svgPath: string) =>
                worker({
                    svgPath,
                }),
            { concurrency: 8 },
        )

        queue.push(svgPaths)

        await queue.wait()

        process.stdout.write(`\n    ${chalk.green('Successfully generated optimized svgs!')}\n\n`)
    } catch (err) {
        process.stderr.write(`\n${chalk.red(err)}\n\n`)
    }
}

async function main() {

}

main()
