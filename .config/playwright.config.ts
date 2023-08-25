import { devices, defineConfig } from '@playwright/test'

/**
 * @link https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    // Match any visual test file types
    testMatch: '**/*.visual.ts',
    use: {
        // Run browser in headless mode
        headless: true,
    },
    projects: [
        {
            name: 'desktop',
            use: { ...devices['Desktop Chrome HiDPI'] },
        },
        {
            name: 'tablet',
            use: { ...devices['iPad (gen 7)'] },
        },
        {
            name: 'mobile',
            use: { ...devices['Galaxy S9+'] },
        },
    ],
    snapshotPathTemplate: '../.test/snapshots/visual/{projectName}.{arg}{ext}',
})
