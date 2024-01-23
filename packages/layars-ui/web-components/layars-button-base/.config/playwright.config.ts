import { PlaywrightTestConfig } from '@playwright/test'

import playwrightConfig from '../../.config/playwright.config.js'

const config: PlaywrightTestConfig = {
    ...playwrightConfig,
    testDir: '../src',
}

export default config
