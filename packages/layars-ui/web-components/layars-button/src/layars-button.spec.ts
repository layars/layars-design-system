/* eslint-disable no-unused-vars */
import type { IWindow } from 'happy-dom'
import { describe, it, expect } from 'vitest'
import { html, render } from 'lit'

import type { LayarsButtonStyles } from './defs.js'

import './layars-button.js'

declare global {
    interface Window extends IWindow {}
}

// Function to retrieve the shadowroot of the component mounted
function getShadowRoot(): string | null | undefined {
    return document.body.querySelector('layars-button')?.shadowRoot?.innerHTML
}

describe('layars-button > spec', async () => {
    // Default button state snapshot
    test('default', async () => {
        render(html`<layars-button>Button</layars-button>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Tests the disabled prop
    test('prop: disabled', async () => {
        render(html`<layars-button ?disabled="${true}">Button</layars-button>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Tests the full-width prop
    test('prop: full-width', async () => {
        render(html`<layars-button ?full-width="${true}">Button</layars-button>`, document.body)

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    // Test the size prop
    const sizes = ['sm', 'md', 'lg']

    sizes.forEach((size) => {
        it(`prop: size = ${size}`, async () => {
            render(html`<layars-button .size="${size}">Button</layars-button>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })

    // Tests the variant prop
    const variants = ['solid', 'outline', 'ghost']

    variants.forEach((variant) => {
        it(`prop: variant = ${variant}`, async () => {
            render(html`<layars-button .variant="${variant}">Button</layars-button>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })

    // Tests the colors
    const colors = ['brand', 'accent', 'neutral', 'destructive', 'inverse']

    variants.forEach((variant) => {
        colors.forEach((color) => {
            it(`props: variant = ${variant} and color = ${color}`, async () => {
                render(
                    html`<layars-button
                        .variant="${variant}"
                        .color="${color}"
                        >Button</layars-button
                    >`,
                    document.body,
                )

                await window.happyDOM.whenAsyncComplete()

                expect(getShadowRoot()).toMatchSnapshot()
            })
        })
    })

    // Test button types
    const types = ['button', 'submit', 'reset']

    types.forEach((type) => {
        it(`prop: type = ${type}`, async () => {
            render(html`<layars-button .type="${type}">Button</layars-button>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })

    // Test button styles
    const styles = [
        {
            name: 'overrides',
            styles: {
                '--btn-base': 'var(--layars-color-surface-gold)',
                '--btn-hover': 'var(--layars-color-surface-gold-inverse)',
                '--btn-pressed': 'var(--layars-color-surface-gold)',
                'border': '2px solid var(--layars-color-surface-gold-subdued)',
            } as LayarsButtonStyles,
        },
    ]

    styles.forEach(({ name, styles }) => {
        it(`prop: styles ~ "${name}"`, async () => {
            render(html`<layars-button .styles=${styles}>Button</layars-button>`, document.body)

            await window.happyDOM.whenAsyncComplete()

            expect(getShadowRoot()).toMatchSnapshot()
        })
    })
})
