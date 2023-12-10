import type { IWindow } from 'happy-dom'
import { describe, it, expect, vi } from 'vitest'

import './layars-button.js'

declare global {
    interface Window extends IWindow {}
}

describe('layars-button > test', async () => {
    const setupComponent = async (variant: string = 'solid') => {
        document.body.innerHTML = `<layars-button variant="${variant}">Button</layars-button>`

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

    it('should dispatch native focus event', async () => {
        setupComponent()
        const spyFocus = vi.fn()

        document.querySelector('layars-button')!.addEventListener('focus', spyFocus)
        getButton().focus()

        expect(spyFocus).toHaveBeenCalledOnce()
    })

    it('should not dispatch click and focus event when disabled', async () => {
        setupComponent()
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

    it('should validate the switch case for styles with variant outline', async () => {
        setupComponent('outline')
        
        const button = getButton()

        expect(button.getAttribute('variant')).toEqual('outline')
    })

    it('should validate the switch case for styles with variant ghost', async() => {
        setupComponent('ghost')

        const button = getButton()

        expect(button.getAttribute('variant')).toEqual('ghost')
    })

    it('should validate the full width property', async() => {
        document.body.innerHTML = `<layars-button full-width={true}>Button</layars-button>`

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))

        const button = getButton()

        expect(button.getAttributeNames().includes('full-width')).toBeTruthy()
    })

    it('should validate the style setter', async() => {
        document.body.innerHTML = `<layars-button styles={{
            '--btn-base': 'var(--layars-color-blue-700)',
            '--btn-hover': 'var(--layars-color-blue-500)',
            '--btn-pressed': 'var(--layars-color-blue-800)',
        }}>Button</layars-button>`

        await window.happyDOM.whenAsyncComplete()
        await new Promise((resolve) => setTimeout(resolve, 0))

        const button = getButton()

        expect(button.getAttributeNames().includes('styles')).toBeTruthy()
    })
})
