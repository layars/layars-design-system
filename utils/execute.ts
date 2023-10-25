import { spawn } from 'node:child_process'
import readline from 'node:readline/promises'

import { Logger } from './logger.js'

/**
 * Execute a command in a spawned shell and steam it to the current shell.
 *
 * @param {string} command
 * @param {Record<string, string | number | symbol>} options
 *
 * @returns
 */
export const execute = async (
    command: string,
    { section = 'between' } = { section: 'between' },
) => {
    return new Promise<number | null>((resolve, reject) => {
        // Spawn command into shell
        const cmd = spawn(`${command}`, { shell: true })

        // On command error...
        cmd.on('error', (err) => {
            // Reject promise with error
            reject(err)
        })

        // On command exit...
        cmd.on('exit', (code) => {
            // Resolve promise with code
            resolve(code)
        })

        // Create a readline interface to read each line
        // from `stdout` inside of the command shell
        const out = readline.createInterface({
            // Use spawned command's stdout for input
            input: cmd.stdout,
            // Disable terminal so that
            // all color information is returned for line
            terminal: false,
        })

        // One any line...
        out.on('line', (line) => {
            // Log the line, with the section defined if provided
            Logger.log(`${line}`, { section })
        })
    })
}
