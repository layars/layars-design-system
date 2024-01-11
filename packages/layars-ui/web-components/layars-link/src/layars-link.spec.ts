/* eslint-disable no-unused-vars */
import type { IWindow } from 'happy-dom'
import { describe, it, expect } from 'vitest'
import { html, render } from 'lit'

// @ts-ignore
import { serializeSnapshot } from '@layars/utils/web-components/tests'

import './layars-link.js'

declare global {
    interface Window extends IWindow {}
}

// Function to retrieve the shadowroot of the component mounted
function getShadowRoot(): string | null | undefined {
    return serializeSnapshot(document.body.querySelector('layars-link')?.shadowRoot?.innerHTML)
}

describe('layars-link > spec', async () => {
    // Default button state snapshot
    test('default', async () => {
        render(html`<layars-link>Link text</layars-link>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Tests the disabled prop
    test('prop: quiet', async () => {
        render(html`<layars-link ?disabled="${true}">Link text</layars-link>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Test the size prop
    const sizes = ['sm', 'md']

    sizes.forEach((size) => {
        it(`prop: size = ${size}`, async () => {
            render(html`<layars-link .size="${size}">Link text</layars-link>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })

    // Tests the variant prop
    const variants = ['primary', 'secondary', 'inverse']

    variants.forEach((variant) => {
        it(`prop: variant = ${variant}`, async () => {
            render(html`<layars-link .variant="${variant}">Link text</layars-link>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })
})