import { describe, it, expect, beforeEach, vi } from 'vitest'

import './layars-button.js'

describe('layars-button > test', async () => {
    beforeEach(async () => {
        document.body.innerHTML = '<layars-button>Button</layars-button>'

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))
    })

    function getButton(): HTMLElement {
        return document.body.querySelector('layars-button')!
    }

    it('should dispatch native click event', async () => {
        const spyClick = vi.fn()

        document.querySelector('layars-button')!.addEventListener('click', spyClick)
        getButton().click()

        expect(spyClick).toHaveBeenCalledOnce()
    })

    it('should dispatch native focus event', async () => {
        const spyFocus = vi.fn()

        document.querySelector('layars-button')!.addEventListener('focus', spyFocus)
        getButton().focus()

        expect(spyFocus).toHaveBeenCalledOnce()
    })

    it('should not dispatch click and focus event when disabled', async () => {
        const spyFocus = vi.fn()
        const spyClick = vi.fn()

        const button = getButton()

        button.setAttribute('disabled', 'true')
        button.addEventListener('focus', spyFocus)
        button.addEventListener('click', spyClick)

        button.focus()
        button.click()

        expect(spyFocus).toBeCalledTimes(0)
        expect(spyClick).toBeCalledTimes(0)
    })
})
