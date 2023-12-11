import { describe, it, expect, vi } from 'vitest'
import dedent from 'dedent-js'

import './layars-button-group.js'

describe('layars-button-group > test', async () => {
    const setupComponent = async ({ orientation = 'solid' }: { orientation?: string } = {}) => {
        document.body.innerHTML = dedent`
            <layars-button-group
                orientation="${orientation}"
            >
                <layars-button>
                    Button
                </layars-button>
                <layars-button>
                    Button
                </layars-button>
            </layars-button-group>
        `

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))
    }

    function getButton(): HTMLElement {
        return document.body.querySelector('layars-button')!
    }

    it('should dispatch native click event', async () => {
        setupComponent()
        const spyClick = vi.fn()

        document.querySelector('layars-button')!.addEventListener('click', spyClick)
        getButton().click()

        expect(spyClick).toHaveBeenCalledOnce()
    })
})
