import { packages } from '@layars/root/utils/packages.js'

const wc = packages['@layars/layars-wc']

export default {
    /** Globs to analyze */
    globs: [`${wc}/**/*.ts`],
    /** Globs to exclude */
    exclude: [`${wc}/.storybook`, `${wc}/layars-bundle`, '**/node_modules'],
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
