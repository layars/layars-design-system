/* eslint-disable no-unused-vars */
import type { IWindow } from 'happy-dom'
import { describe, expect } from 'vitest'
import { html, render } from 'lit'

import { serializeSnapshot } from '@layars/utils/web-components/tests'

import './layars-button-group.js'

declare global {
    interface Window extends IWindow {}
}

// Function to retrieve the shadowroot of the component mounted
function getShadowRoot(): string | null | undefined {
    return serializeSnapshot(
        document.body.querySelector('layars-button-group')?.shadowRoot?.innerHTML
    )
}

describe('layars-button-group > spec', async () => {
    // Default button state snapshot
    test('default', async () => {
        render(
            html`
                <layars-button-group>
                    <layars-button>Button</layars-button>
                </layars-button-group>
            `,
            document.body
        )

        await window.happyDOM.whenAsyncComplete()

        expect(getShadowRoot()).toMatchSnapshot()
    })
})
