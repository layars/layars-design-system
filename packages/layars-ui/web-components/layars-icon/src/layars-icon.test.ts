import type { IWindow } from 'happy-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import './layars-icon.js'

declare global {
    interface Window extends IWindow {}
}

describe('layars-icon > test', async () => {
    beforeEach(async () => {
        document.body.innerHTML = '<layars-icon>+</layars-icon>'

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))
    })

    function getIcon(): HTMLElement {
        return document.body.querySelector('layars-icon')!
    }

    it('should render', async () => {
        expect(getIcon()).not.toBeNull()
    })
})
