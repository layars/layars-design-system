/* eslint-disable no-unused-vars */
import type { IWindow } from 'happy-dom'
import { describe, expect } from 'vitest'
import { html, render } from 'lit'
import merge from 'lodash.merge'

// @ts-ignore
import { serializeSnapshot } from '@layars/utils/web-components/tests'

import { light } from '@layars/tokens'

import './layars-theme-provider.js'

declare global {
    interface Window extends IWindow {}
}

// Function to retrieve the shadowroot of the component mounted
function getShadowRoot(): string | null | undefined {
    return serializeSnapshot(
        document.body.querySelector('layars-theme-provider')?.shadowRoot?.innerHTML
    )
}

describe('layars-theme-provider > spec', async () => {
    test('default', async () => {
        render(
            html`
                <layars-theme-provider .scope="${'local'}">
                    <layars-button>Button</layars-button>
                </layars-theme-provider>
            `,
            document.body
        )

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    test('prop: type > light', async () => {
        render(
            html`
                <layars-theme-provider
                    .scope="${'local'}"
                    .type="${'light'}"
                >
                    <layars-button>Button</layars-button>
                </layars-theme-provider>
            `,
            document.body
        )

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    test('prop: type > dark', async () => {
        render(
            html`
                <layars-theme-provider
                    .scope="${'local'}"
                    .type="${'dark'}"
                >
                    <layars-button>Button</layars-button>
                </layars-theme-provider>
            `,
            document.body
        )

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })

    test('props: tokens', async () => {
        const tokens: Record<string, any> = {
            custom: merge({}, light, {
                name: 'custom',
                color: {
                    surface_default: 'var(--layars-color-surface-gold-subdued)',
                    action_interactive: 'red',
                    action_interactive_hover: 'darkred',
                    action_interactive_pressed: 'lightsalmon',
                    action_interactive_subdued: 'lightsalmon',
                    action_interactive_subdued_hover: 'lightpink',
                    action_interactive_subdued_pressed: 'coral',
                    text_interactive: 'darkred',
                },
                font: {
                    family: {
                        default: '"Comic Sans MS"',
                    },
                },
            }),
        }

        render(
            html`
                <layars-theme-provider
                    .scope="${'local'}"
                    .type="${'custom'}"
                    .tokens="${tokens}"
                >
                    <layars-button>Button</layars-button>
                </layars-theme-provider>
            `,
            document.body
        )

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })
})
