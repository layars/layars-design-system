import chalk from 'chalk'
import * as CommonTags from 'common-tags/lib/index.js'

import { Logger } from '../utils/logger.js'

const { stripIndent } = CommonTags

async function main() {
    const section = process.env.BUILD_SUCCESS_SECTION ?? 'default'

    const success = stripIndent`
        ╔══╗       ╔╗   ╔╗    ╔═══╗                         ╔═╗    ╔╗ ╔╗
        ║╔╗║       ║║   ║║    ║╔═╗║                         ║╔╝    ║║ ║║
        ║╚╝╚╗╔╗╔╗╔╗║║ ╔═╝║    ║╚══╗╔╗╔╗╔══╗╔══╗╔══╗╔══╗╔══╗╔╝╚╗╔╗╔╗║║ ║║
        ║╔═╗║║║║║╠╣║║ ║╔╗║    ╚══╗║║║║║║╔═╝║╔═╝║╔╗║║══╣║══╣╚╗╔╝║║║║║║ ╚╝
        ║╚═╝║║╚╝║║║║╚╗║╚╝║    ║╚═╝║║╚╝║║╚═╗║╚═╗║║═╣╠══║╠══║ ║║ ║╚╝║║╚╗╔╗
        ╚═══╝╚══╝╚╝╚═╝╚══╝    ╚═══╝╚══╝╚══╝╚══╝╚══╝╚══╝╚══╝ ╚╝ ╚══╝╚═╝╚╝
    `

    Logger.log(`\n${chalk.green(success)}\n\n`, { section })
}

await main()
