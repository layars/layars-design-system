import { PlaywrightTestConfig } from '@playwright/test'

import baseConfig from '../../.config/playwright.config.js'

const config: PlaywrightTestConfig = {
    ...baseConfig,
    testDir: '../src',
}

export default config
