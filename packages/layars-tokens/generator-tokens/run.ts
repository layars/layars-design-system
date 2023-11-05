#!/usr/bin/env node
import { exit } from 'node:process'

import chalk from 'chalk'

import TokensDictionary from './classes/TokensDictionary.js'

// Include TokensDictionary config
import { config } from './config.js'

TokensDictionary.config(config)

async function main() {
    process.stdout.write(`\n${chalk.blue('Generating tokens...')}\n`)

    TokensDictionary.run()

    process.stdout.write(`\n\n${chalk.bold(chalk.green('Successfully generated tokens!'))}\n\n`)

    exit(0)
}

main()
