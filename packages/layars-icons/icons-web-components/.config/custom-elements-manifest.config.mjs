import { workspaces } from '@layars/root/utils/workspaces.js'

const workspace = workspaces['@layars/layars-icons-wc'].path

export default {
    /** Globs to analyze */
    globs: [`${workspace}/**/*.ts`],
    /** Globs to exclude */
    exclude: [`${workspace}/.storybook`, `${workspace}/layars-bundle`, '**/node_modules'],
    /** Directory to output CEM to */
    outdir: `./.manifest`,
    /** Run in dev mode, provides extra logging */
    // dev: true,
    /** Run in watch mode, runs on file changes */
    // watch: true,
    /** Include third party custom elements manifests */
    // dependencies: true,
    /** Enable special handling for litelement */
    litelement: true,
}
