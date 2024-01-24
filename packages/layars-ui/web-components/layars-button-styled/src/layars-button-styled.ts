import { html, LitElement, PropertyValues } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'

import { settings } from '@layars/utils/web-components'
import { host_styles } from './styles/index.ts'

import '@layars/button-base'

@customElement(`${settings.prefix}-button-styled`)
class LayarsButtonStyled extends LitElement {
    /**
     * Is the button disabled
     */
    @property({ reflect: true, type: Boolean })
    public disabled: boolean = false

    @property({ reflect: true })
    public variant: 'solid' | 'outline' | 'ghost' = 'solid'

    @property({ reflect: true })
    public color: 'brand' | 'accent' | 'neutral' | 'destructive' | 'inverse' = 'brand'

    @property({ reflect: true })
    public size: 'sm' | 'md' | 'lg' = 'md'

    /**
     * @param {Event} event - event to stop propagation
     */
    private _handleDisabledEvent(event: Event) {
        if (this.disabled) {
            event.stopImmediatePropagation()
        }
    }

    /**
     * @param {Event} event - click event to handle
     */
    @eventOptions({ capture: true })
    private _handleClick(event: Event) {
        this._handleDisabledEvent(event)
    }

    /**
     * @param {Event} event - focus event to handle
     */
    @eventOptions({ capture: true })
    private _handleFocus(event: Event) {
        this._handleDisabledEvent(event)
    }

    constructor() {
        super()

        // Internal click and focus handlers
        this.addEventListener('click', this._handleClick)
        this.addEventListener('focus', this._handleFocus)
    }

    updated(changedProperties: PropertyValues<this>) {
        if (changedProperties.has('size')) {
            switch(this.size) {
                case 'sm':
                    this.style.setProperty('--btn-height', 'var(--layars-sizes-size-32')
                    this.style.setProperty('--btn-padding-left', 'var(--layars-sizes-size-20)')
                    this.style.setProperty('--btn-padding-right', 'var(--layars-sizes-size-20')
                    break

                case 'lg':
                    this.style.setProperty('--btn-height', 'var(--layars-sizes-size-48')
                    this.style.setProperty('--btn-padding-left', 'var(--layars-sizes-size-32)')
                    this.style.setProperty('--btn-padding-right', 'var(--layars-sizes-size-32')
                    break

                default:
                    this.style.setProperty('--btn-height', 'var(--layars-sizes-size-40)')
                    this.style.setProperty('--btn-padding-left', 'var(--layars-sizes-size-24)')
                    this.style.setProperty('--btn-padding-right', 'var(--layars-sizes-size-24')
            }
        }

        if (changedProperties.has('color')) {
            this.style.setProperty('--btn-surface', `var(--layars-color-action-${this.color}-enabled)`)
            this.style.setProperty('--btn-surface-hover', `var(--layars-color-action-${this.color}-hover)`)
            this.style.setProperty('--btn-surface-active', `var(--layars-color-action-${this.color}.pressed)`)
            this.style.setProperty('--btn-content', `var(--layars-color-content-${(this.color === 'inverse') ? 'primary' : 'inverted-primary'})`)
            this.style.setProperty('--btn-border-color', `var(--layars-color-action-${this.color}-enabled)`)
            this.style.setProperty('--btn-border-color-hover', `var(--layars-color-action-${this.color}-hover)`)
            this.style.setProperty('--btn-border-color-active', `var(--layars-color-action-${this.color}-pressed)`)
        }
    }

    protected render() {
        return html`
            <layars-button-base>
                <slot></slot>
            </layars-button-base>
        `
    }

    static styles = host_styles
}

export { LayarsButtonStyled }
export default LayarsButtonStyled