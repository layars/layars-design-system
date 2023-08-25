import { test, expect } from '@playwright/test'

import { visual } from '../.config/test.utils.js'

test('layars-theme-provider > visual > light', async ({ page }) => {
    await page.goto(
        'http://localhost:18000/iframe.html?id=layars-theme-provider--default&globals=theme:light&args=type:light&viewMode=story',
        { ...visual.gotoOptions },
    )

    expect(
        await page.locator('storybook-theme-provider').screenshot({
            ...visual.snapshotOptions,
        }),
    ).toMatchSnapshot(['layars-theme-provider.light.png'])
})

test('layars-theme-provider > visual > dark', async ({ page }) => {
    await page.goto(
        'http://localhost:18000/iframe.html?id=layars-theme-provider--default&globals=theme:dark&args=type:dark&viewMode=story',
        { ...visual.gotoOptions },
    )

    expect(
        await page.locator('storybook-theme-provider').screenshot({
            ...visual.snapshotOptions,
        }),
    ).toMatchSnapshot(['layars-theme-provider.dark.png'])
})
