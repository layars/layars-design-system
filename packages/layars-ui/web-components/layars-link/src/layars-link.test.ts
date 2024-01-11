import type { IWindow } from 'happy-dom'
import { describe, it, expect, vi } from 'vitest'

import './layars-link.js'

declare global {
    interface Window extends IWindow {}
}

describe('layars-link > test', async () => {
    const setupComponent = async () => {
        document.body.innerHTML = `<layars-link url="https://www.google.com">Link text</layars-link>`

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))
    }

    function getLink(): HTMLElement {
        return document.body.querySelector('layars-link')!
    }

    it('should dispatch native click event', async () => {
        setupComponent()
        const spyClick = vi.fn()
        
        document.querySelector('layars-link')!.addEventListener('click', spyClick)
        getLink().click()

        expect(spyClick).toHaveBeenCalledOnce()
    })
})
