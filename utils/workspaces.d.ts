// Generic workspace type
export type Workspace = {
    // Name of the workspace
    // From `package.json` -> `name` field
    name: string
    // Path of the workspace
    // Can be both absolute or relative
    path: string
    // Semver version of the workspace
    // From `package.json` -> `version` field
    version: string
    // Whether or not the workspace is private
    // If not prive, then workspace is a package
    // From the `package.json` -> `private` field
    private: boolean
}

// Infers types from a cached workspaces file
export type WorkspacesCached = typeof import('./workspaces.json')

// Workspaces are either from the cache or generic if not cached yet
export type Workspaces = WorkspacesCached & Record<string, Workspace>

export const workspaces: Workspaces
