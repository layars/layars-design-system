import fs from 'fs'
import { mergeConfig, type Plugin } from 'vite'
import type { StorybookConfig } from '@storybook/web-components-vite'
import remarkGfm from 'remark-gfm'

import { workspaces } from '@layars/root/utils/workspaces.js'

const workspace = workspaces['@layars/storybook']

const config: StorybookConfig = {
    stories: ['./docs/**/*.mdx'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false,
            },
        },
    ],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
        buildStoriesJson: true,
    },
    docs: {
        autodocs: true,
        defaultName: 'Docs',
    },
    refs: {
        wc: {
            title: 'Web Components',
            url: 'http://localhost:18000',
        },
        ['wc-icons']: {
            title: 'Web Components Icons',
            url: 'http://localhost:19000',
        }
    },
    previewBody() {
        return fs.readFileSync(`${workspace.path}/preview.html`, { encoding: 'utf8' })
    },
    viteFinal: (config) => {
        // Filter out breaking plugins
        const plugins = config.plugins?.filter(
            (plugin) => !['vite-plugin-eslint'].includes((plugin as Plugin)?.name),
        )

        config.plugins = plugins

        // Remove testing configuration
        // @ts-ignore
        delete config.test

        return mergeConfig(config, {})
    },
}

export default config
