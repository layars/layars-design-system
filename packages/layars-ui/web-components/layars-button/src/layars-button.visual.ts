import { test, expect } from '@playwright/test'

import { visual } from '@layars/web-components-root/.config/test.utils.ts'

/**
 * Solid button tests
 */
test('layars-button > visual > neutral-solid', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.neutral-solid.png'])
})

test('layars-button > visual > brand-solid', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=color:brand&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions,}))
        .toMatchSnapshot(['layars-button.brand-solid.png'])
})

test('layars-button > visual > accent-solid', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=color:accent&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions,}))
        .toMatchSnapshot(['layars-button.accent-solid.png'])
})

test('layars-button > visual > destructive-solid', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=color:destructive&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions,}))
        .toMatchSnapshot(['layars-button.destructive-solid.png'])
})

test('layars-button > visual > inverse-solid', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=color:inverse&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions,}))
        .toMatchSnapshot(['layars-button.inverse-solid.png'])
})

/**
 * Outline Button Test
 */
test('layars-button > visual > neutral-outline', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:outline&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.neutral-outline.png'])
})

test('layars-button > visual > brand-outline', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:outline;color:brand&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.brand-outline.png'])
})

test('layars-button > visual > accent-outline', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:outline;color:accent&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.accent-outline.png'])
})

test('layars-button > visual > destructive-outline', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:outline;color:destructive&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.destructive-outline.png'])
})

test('layars-button > visual > inverse-outline', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:outline;color:inverse&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.inverse-outline.png'])
})

/**
 * Ghost Button Test
 */
test('layars-button > visual > neutral-ghost', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:ghost&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.neutral-ghost.png'])
})

test('layars-button > visual > brand-ghost', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:ghost;color:brand&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.brand-ghost.png'])
})

test('layars-button > visual > accent-ghost', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:ghost;color:accent&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.accent-ghost.png'])
})

test('layars-button > visual > destructive-ghost', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:ghost;color:destructive&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.destructive-ghost.png'])
})

test('layars-button > visual > inverse-ghost', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=variant:ghost;color:inverse&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.inverse-ghost.png'])
})

/**
 * Button Sizes
 * note: all the above tests have shown medium button,
 * will only test small and large variants
 */
test('layars-button > visual > small', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=size:sm&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.small.png'])
})

test('layars-button > visual > large', async ({ page }) => {
    await page.goto(
        'http://localhost:18001/iframe.html?args=size:lg&id=layars-web-components-layars-button--default&viewMode=story',
        { ...visual.gotoOptions }
    )

    expect(await page.locator('layars-button')
        .screenshot({ ...visual.snapshotOptions, }))
        .toMatchSnapshot(['layars-button.large.png'])
})