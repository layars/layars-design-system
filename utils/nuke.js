import fs from 'node:fs'

import { workspaces } from './workspaces.js'
import { Logger } from './logger.js'

/**
 * Nukes all node_modules in every workspace.
 *
 * Use with caution!!
 */
function main() {
    const workspace = workspaces['@layars/root']
    const section = new Logger.Section({ workspace })

    section.start('main')

    // Get all workspaces, except root
    const spaces = Object.values(workspaces).filter(
        (workspace) => workspace.name !== '@layars/root'
    )

    // For each workspace,
    ;[...spaces, workspace].forEach(({ path }) => {
        try {
            // Build files
            fs.rmSync(`${path}/tsconfig.tsbuildinfo`, { recursive: true, force: true })
            fs.rmSync(`${path}/types`, { recursive: true, force: true })
            fs.rmSync(`${path}/lib`, { recursive: true, force: true })

            // node_modules
            fs.rmSync(`${path}/node_modules`, { recursive: true, force: true })

            // Successful
            section.log(`${path} (✅)`)
        } catch {
            // Unsuccessful
            section.log(`${path} (❌)`)
        }
    })

    section.end('main')
}

main()
