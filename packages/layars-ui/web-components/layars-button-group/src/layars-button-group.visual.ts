import { test, expect } from '@playwright/test'
import { visual } from '@layars/web-components-root/.config/test.utils.ts'

const orientations = ['row', 'column']
const spacings = ['tight', 'normal', 'loose']

orientations.forEach(orientation => {
    spacings.forEach(spacing => {
        test(`layars-button-group > visual > ${orientation}-${spacing}`, async ({ page }) => {
            await page.goto(
                `http://localhost:18001/iframe.html?args=orientation:${orientation};spacing:${spacing}&id=layars-web-components-layars-button-group--default&viewMode=story`,
                { ...visual.gotoOptions }
            )
        
            expect(await page.locator('layars-button-group')
                .screenshot({ ...visual.snapshotOptions, }))
                .toMatchSnapshot([`layars-button-group.${orientation}-${spacing}.png`])
        })
    })
})
