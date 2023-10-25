import { execSync } from 'node:child_process'
import { argv } from 'node:process'
import fs from 'node:fs/promises'
import * as url from 'node:url'

import minimist from 'minimist'

/**
 * Provide a map of each available workspace.
 *
 * @type {import('./workspaces.d.ts').Workspaces}
 */
const workspaces =
    // Use pnpm to list out all workspaces, and...
    execSync('pnpm ls -r --depth -1 --long --parseable')
        // Convert to UTF8
        .toString('utf-8')
        // Split for every newline
        .split('\n')
        // Slive off empty last newline
        .slice(0, -1)
        // Map each entry...
        .map((entry) => {
            // Example
            // /Dev/Layars/git/layars-design-system:@layars/root@0.0.0:PRIVATE
            const [path, info, priv] = entry.split(':')
            const [, name, version] = info.split('@')

            return {
                name: `@${name}`,
                path,
                version,
                private: priv === 'PRIVATE',
            }
        })
        // Reduce into record
        .reduce((acc, workspace) => ({ ...acc, [workspace.name]: workspace }), {})

async function main() {
    // Get args from minimist
    const args = minimist(argv.slice(2))

    // If `--cache-workspaces` arg given, write new cache
    if (args['cache-workspaces']) {
        // Get current directory
        const __dirname = url.fileURLToPath(new url.URL('.', import.meta.url))

        // Get root directory above utils
        const __root = url.fileURLToPath(new url.URL('..', import.meta.url)).replace(/\/$/, '')

        // Convert absolute paths to relative paths in each workspace
        const relativeWorkspaces = Object.values(workspaces).reduce((spaces, workspace) => {
            const relativeWorkspace = {
                ...workspace,
                // Remove root directory path (absolute) and make relative
                path: workspace.path.replace(__root, '.'),
            }

            return { ...spaces, [workspace.name]: relativeWorkspace }
        }, {})

        const cachePath = `${__dirname}/workspaces.json`

        // Write workspaces to JSON for tracking and helpers
        await fs.writeFile(cachePath, JSON.stringify(relativeWorkspaces, null, 4))
    }
}

main()

export { workspaces }
