import { mergeConfig, defineConfig } from 'vite'

import viteConfig from '../../.config/vite.config.js'

export default mergeConfig(
    viteConfig,
    defineConfig({
        // nothing
    }),
)
