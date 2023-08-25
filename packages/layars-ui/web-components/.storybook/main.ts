import { glob } from 'glob'
import path from 'path'

import type { StorybookConfig } from '@storybook/web-components-vite'

import shared from '@layars/root/.storybook/main.ts'

const dir = path.resolve(__dirname, '../')
const stories = () =>
    glob.sync(`${dir}/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {
        ignore: `${dir}/**/node_modules/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
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
