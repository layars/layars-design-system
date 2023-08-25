import glob from 'glob'

import type { StorybookConfig } from '@storybook/web-components-vite'

import shared from '@layars/root/.storybook/main.ts'

import { workspaces } from '@layars/root/utils/workspaces.js'

const workspace = workspaces['@layars/layars-icons-wc']

const stories = () =>
    glob.sync(`${workspace.path}/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {
        ignore: `${workspace.path}/**/node_modules/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
    })

const config: StorybookConfig = {
    // @ts-ignore
    stories: async (list = []) => [...list, ...stories()],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    addons: shared.addons,
    features: shared.features,
    docs: shared.docs,
    previewBody: shared.previewBody,
    viteFinal: shared.viteFinal,
}

export default config
