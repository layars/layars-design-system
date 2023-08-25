/* eslint-disable no-unused-vars */
import type { IWindow } from 'happy-dom'
import { describe, it, expect } from 'vitest'
import { html, render } from 'lit'

import './layars-button.js'

declare global {
    interface Window extends IWindow {}
}

// Function to retrieve the shadowroot of the component mounted
function getShadowRoot(): string | null | undefined {
    return document.body.querySelector('layars-icon')?.shadowRoot?.innerHTML
}

describe('layars-icon > spec', async () => {
    // Default state snapshot
    test('default', async () => {
        render(html`<layars-icon>+</layars-icon>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Test the size prop
    // const sizes = ['sm', 'md', 'lg', 'xl']

    // sizes.forEach((size) => {
    //     it(`prop: size = ${size}`, async () => {
    //         render(html`<layars-button .size="${size}">Button</layars-button>`, document.body)

    //         await window.happyDOM.whenAsyncComplete()

    //         expect(getShadowRoot()).toMatchSnapshot()
    //     })
    // })

    // Tests the colors
    const colors = ['neutral', 'interactive', 'green', 'red']

    colors.forEach((color) => {
        it(`props: color = ${color}`, async () => {
            render(html`<layars-icon .color="${color}">+</layars-icon>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })
})
