import stripANSI from 'strip-ansi'
import { toArray } from 'lodash-es'
import chalk from 'chalk'

// Tell `chalk` to force color into spawned shells
// eslint-disable-next-line no-undef
process.env.FORCE_COLOR = 'true'

export class Section {
    logs = []

    workspace

    constructor({ workspace }) {
        this.logs = []
        this.workspace = workspace
    }

    start(line, opts = {}) {
        const log = [chalk.blue('start'), chalk.green(this.workspace.name), chalk.blue(line)].join(
            ' '
        )

        this.logs.push(log)

        Logger.log(log, { section: 'start', ...opts })
    }

    log(line, opts = {}) {
        this.logs.push(line)

        Logger.log(line, { section: 'between', ...opts })
    }

    end(line, opts = {}) {
        const log = [chalk.blue('end'), chalk.green(this.workspace.name), chalk.blue(line)].join(
            ' '
        )

        this.logs.push(log)

        Logger.log(log, { section: 'end', ...opts })
    }
}

class Build {
    static async Success({ section = 'default' } = {}) {
        // Run build success script
        // eslint-disable-next-line no-undef
        process.env.BUILD_SUCCESS_SECTION = section
        return await import('../.scripts/build-successful.js')
    }
}

class Test {
    static async Success({ section = 'default' } = {}) {
        // Run test success script
        // eslint-disable-next-line no-undef
        process.env.TEST_SUCCESS_SECTION = section
        return await import('../.scripts/test-successful.js')
    }
}

export class Logger {
    static Section = Section
    static Build = Build
    static Test = Test

    /**
     * Pretty logs for executed commands and combining sections of commands.
     */
    static log(line, { section = 'default', pre = null, post = null } = {}) {
        // Number of characters in current line
        const characters = toArray(stripANSI(line)).length
        // Number of columns in terminal
        // eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-undef
        process.stdout.write(`${pre}${line}${post}`)
    }
}
