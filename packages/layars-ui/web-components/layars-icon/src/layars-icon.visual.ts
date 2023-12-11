import { test, expect } from '@playwright/test'

import { visual } from '@layars/web-components-root/.config/test.utils.js'

test('layars-icon > visual > default', async ({ page }) => {
    await page.goto(
        'http://localhost:18000/iframe.html?id=layars-icon--default&globals=theme:light&viewMode=story',
        { ...visual.gotoOptions },
    )

    expect(
        await page.locator('layars-icon').screenshot({
            ...visual.snapshotOptions,
        }),
    ).toMatchSnapshot(['layars-icon.default.png'])
})
