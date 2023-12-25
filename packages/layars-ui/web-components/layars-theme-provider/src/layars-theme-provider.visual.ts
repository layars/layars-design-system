import { test, expect } from '@playwright/test'
import { visual } from '@layars/web-components-root/.config/test.utils.ts'

const themes = ['light', 'dark']

themes.forEach(theme => {
    test(`layars-theme-provider > visual > ${theme}`, async ({ page }) => {
        await page.goto(
            `http://localhost:18001/iframe.html?args=type:${theme}&id=layars-web-components-layars-theme-provider--default&viewMode=story`,
            { ...visual.gotoOptions }
        )
    
        expect(await page.locator('.default-row')
            .screenshot({ ...visual.snapshotOptions, }))
            .toMatchSnapshot([`layars-theme-provider.${theme}.png`])
    })
})

