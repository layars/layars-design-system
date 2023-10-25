import url, { URL } from 'node:url'

/**
 * Helper function that returns the absolute directory path
 * to the file that executed the function if the `meta` argument
 * supplies the file's `import.meta.url`
 *
 * Call function like `dirname(import.meta.url)`
 *
 * Similar to `__dirname` from commonjs
 *
 * @param {string} meta - file's `import.meta.url`
 * @returns {string} - the absolute file path
 */
export const dirname = (meta = import.meta.url) => url.fileURLToPath(new URL('.', meta))
