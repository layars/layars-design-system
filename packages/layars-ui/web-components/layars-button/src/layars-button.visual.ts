import { test, expect } from '@playwright/test'

import { visual } from '../.config/test.utils.js'

test('layars-button > visual > default', async ({ page }, info) => {
    await page.goto(
        'http://localhost:18000/iframe.html?id=layars-button--default&globals=theme:light&viewMode=story',
        { ...visual.gotoOptions },
    )

    expect(
        await page.locator('layars-button').screenshot({
            ...visual.snapshotOptions,
        }),
    ).toMatchSnapshot(['layars-button.default.png'])
})
