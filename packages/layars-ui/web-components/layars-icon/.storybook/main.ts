import path from 'path'

import { StorybookConfig } from '@storybook/web-components-vite'

import main from '../../.storybook/main.js'

const root = path.resolve(__dirname, '../')

const config: StorybookConfig = {
    ...main,
    stories: [`${root}/src/**/*.stories.@(js|jsx|ts|tsx|mdx)`],
}

export default config
