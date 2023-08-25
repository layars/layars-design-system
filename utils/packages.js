import { workspaces } from './workspaces.js'

/**
 * Provide a map of available packages out of the workspaces
 *
 * @type {import('./packages.d.ts').Packages}
 */
const packages =
    // Use workspaces...
    Object.values(workspaces)
        // Filter out private workspaces
        .filter((workspace) => !workspace.private)
        // Reduce into record
        .reduce((acc, workspace) => ({ ...acc, [workspace.name]: workspace }), {})

export { packages }
