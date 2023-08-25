import fs from 'node:fs/promises'

import StyleDictionary from 'style-dictionary'
import _ from 'lodash'
import chalk from 'chalk'

import { workspaces } from '@layars/root/utils/workspaces.js'

// Include StyleDictionary config
import { config } from './config.js'

// Current workspace
const workspace = workspaces['@layars/tokens']

async function main() {
    // Clean src directory
    process.stdout.write(`\n${chalk.blue('Cleaning src...')}\n`)
    // For each theme in config...
    for (const theme in config.themes) {
        // Remove directory
        await fs.rm(`${workspace.path}/src/${theme}`, { recursive: true, force: true })
    }

    process.stdout.write(`\n${chalk.blue('Generating artifacts...')}\n`)

    // Build all platforms, light and dark themes
    process.stdout.write(`\n=> ${chalk.blue('Generating "light" theme...')}\n`)
    StyleDictionary.extend(`${workspace.path}/config.light.json`).buildAllPlatforms()

    process.stdout.write(`\n=> ${chalk.blue('Generating "dark" theme...')}\n`)
    StyleDictionary.extend(`${workspace.path}/config.dark.json`).buildAllPlatforms()

    process.stdout.write(`\n${chalk.bold(chalk.green('Successfully generated artifacts!'))}\n\n`)
}

main()
