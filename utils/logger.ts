import stripANSI from 'strip-ansi'
import _ from 'lodash'
import chalk from 'chalk'

import type { Workspace } from './workspaces.js'

// Tell `chalk` to force color into spawned shells
process.env.FORCE_COLOR = 'true'

export class Section {
    logs: string[] = []

    workspace: Workspace

    constructor({ workspace }: { workspace: Workspace }) {
        this.logs = []
        this.workspace = workspace
    }

    start(line: string, opts?: Parameters<typeof Logger.log>[1]) {
        const log = [chalk.blue('start'), chalk.green(this.workspace.name), chalk.blue(line)].join(
            ' ',
        )

        this.logs.push(log)

        Logger.log(log, { section: 'start', ...opts })
    }

    log(line: string, opts?: Parameters<typeof Logger.log>[1]) {
        this.logs.push(line)

        Logger.log(line, { section: 'between', ...opts })
    }

    end(line: string, opts?: Parameters<typeof Logger.log>[1]) {
        const log = [chalk.blue('end'), chalk.green(this.workspace.name), chalk.blue(line)].join(
            ' ',
        )

        this.logs.push(log)

        Logger.log(log, { section: 'end', ...opts })
    }
}

class Build {
    public static async Success({ section = 'default' } = {}) {
        // Run build success script
        process.env.BUILD_SUCCESS_SECTION = section
        return await import('../.scripts/build-successful.js')
    }
}

class Test {
    public static async Success({ section = 'default' } = {}) {
        // Run test success script
        process.env.TEST_SUCCESS_SECTION = section
        return await import('../.scripts/test-successful.js')
    }
}

export class Logger {
    public static Section = Section
    public static Build = Build
    public static Test = Test

    /**
     * Pretty logs for executed commands and combining sections of commands.
     *
     * @param {string} line
     * @param {Record<string, any>} options
     */
    public static log(
        line: string,
        {
            section = 'default',
            pre = null,
            post = null,
        }: { section?: string; pre?: string | null; post?: string | null } = {},
    ) {
        // Number of characters in current line
        const characters = _.toArray(stripANSI(line)).length
        // Number of columns in terminal
        const columns = Math.max(process.stdout.columns - 4, 0)
        // A row is the total number of columns minus the number of characters in the line
        const row = Math.max(columns - characters, 0)
        // Length of each half of the line
        const left = Math.floor(row / 2)
        const right = row - left

        // Switch on the section type...
        switch (section) {
            // On the start line...
            case 'start':
                // Asign pre and post to corners
                pre = pre ?? `╔${'═'.repeat(left)} `
                post = post ?? ` ${'═'.repeat(right)}╗\n`

                break

            // On a between line...
            case 'between':
                // Asign pre and post to corners
                pre = pre ?? '║  '
                post = post ?? '\n' // `${' '.repeat(row)}║\n` // Maybe some other time...

                break

            // On a end line...
            case 'end':
                // Asign pre and post to corners
                pre = pre ?? `╚${'═'.repeat(left)} `
                post = post ?? ` ${'═'.repeat(right)}╝\n\n`

                break

            // By default, or for special sections...
            default:
                // Don't make log pretty
                pre = pre ?? ''
                post = post ?? ''

                break
        }

        // Write log to stdout
        process.stdout.write(`${pre}${line}${post}`)
    }
}
