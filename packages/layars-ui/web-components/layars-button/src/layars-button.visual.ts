import { test, expect } from '@playwright/test'
import { visual } from '@layars/web-components-root/.config/test.utils.ts'

const variants = ['solid', 'outline', 'ghost']
const colors = ['neutral', 'brand', 'accent', 'destructive', 'inverse']
const sizes = ['sm', 'md', 'lg']

variants.forEach(variant => {
    colors.forEach(color => {
        test(`layars-button > visual > ${color}-${variant}`, async ({ page }) => {
            await page.goto(
                `http://localhost:18001/iframe.html?args=variant=${variant};color:${color}&id=layars-web-components-layars-button--default&viewMode=story`,
                { ...visual.gotoOptions }
            )
        
            expect(await page.locator('layars-button')
                .screenshot({ ...visual.snapshotOptions,}))
                .toMatchSnapshot([`layars-button.${color}-${variant}.png`])
        })
    })
})

sizes.forEach(size => {
    test(`layars-button > visual > ${size}`, async ({ page }) => {
        await page.goto(
            `http://localhost:18001/iframe.html?args=size:${size}&id=layars-web-components-layars-button--default&viewMode=story`,
            { ...visual.gotoOptions }
        )
    
        expect(await page.locator('layars-button')
            .screenshot({ ...visual.snapshotOptions, }))
            .toMatchSnapshot([`layars-button.${size}.png`])
    })
})
