import fs from 'node:fs/promises'

import chalk from 'chalk'

import { workspaces } from '@layars/root/utils/workspaces.js'
import { execute } from '@layars/root/utils/execute.js'
import { Logger } from '@layars/root/utils/logger.js'

// Current workspace
const workspace = workspaces['@layars/tokens']

// Build config
const config = {
    in: `${workspace.path}/src`,
    out: `${workspace.path}/lib`,
}

/**
 * Prebuild Step
 */
async function prebuild() {
    const section = new Logger.Section({ workspace })

    section.start('prebuild')

    // Clean lib directory...
    section.log(`${chalk.blue('Cleaning lib...')}`)
    await fs.rm(`${workspace.path}/lib`, { recursive: true, force: true })

    section.end('prebuild')
}

/**
 * Build Step
 */
async function build() {
    const section = new Logger.Section({ workspace })

    section.start('build')

    section.log(chalk.blueBright(chalk.bold('Generating tokens')))

    await execute('pnpm generate:tokens')

    section.log(chalk.blueBright(chalk.bold('Generating artifacts')))

    await execute('pnpm generate:artifacts')

    section.log(chalk.blueBright(chalk.bold('Cleaning up artifacts')))

    await execute('pnpm generate:artifacts:prettier')

    try {
        await fs.access(config.out)
    } catch {
        await fs.mkdir(config.out)
    }

    await fs.cp(`${workspace.path}/src`, `${workspace.path}/lib`, { recursive: true })

    section.end('build')
}

/**
 * Postbuild Step
 */
async function postbuild() {
    const section = new Logger.Section({ workspace })

    section.start('postbuild')

    section.log(chalk.blue('Nothing yet...'))

    section.end('postbuild')
}

async function main() {
    await prebuild()

    await build()

    await postbuild()

    Logger.Build.Success()
}

main()
