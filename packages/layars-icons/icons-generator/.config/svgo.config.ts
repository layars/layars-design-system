import type { Config } from 'svgo'

export const config: Config = {
    // run multiple passes on svgs
    multipass: true,

    // 'base64' (default), 'enc' or 'unenc'.
    // unencode data uri for <svg> tags
    datauri: 'unenc',

    // options for rendering optimized SVG from AST
    js2svg: {
        // string with spaces or number of spaces. 4 by default
        indent: 2,

        // prettify output
        pretty: true,
    },

    plugins: [
        {
            // set of built-in plugins enabled by default
            name: 'preset-default',
            params: {
                overrides: {
                    // remove viewBox attribute when possible
                    removeViewBox: false,
                },
            },
        },

        // prefix IDs and classes with the SVG filename or an arbitrary string
        'prefixIds',

        // remove width/height and add viewBox if it's missing (opposite to removeViewBox, disable it first)
        'removeDimensions',
    ],
}

export default config
