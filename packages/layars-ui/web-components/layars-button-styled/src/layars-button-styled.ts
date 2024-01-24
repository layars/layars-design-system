import { html, LitElement, PropertyValues } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'

import { settings } from '@layars/utils/web-components'
import { host_styles, sizes, colors } from './styles/index.ts'


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
            sizes(this.size).forEach(size => {
                this.style.setProperty(size.variable, size.value)
            })
        }

        if (changedProperties.has('color')) {
            colors(this.color, this.variant).forEach(color => {
                this.style.setProperty(color.variable, color.value)
            })
        }
    }

    static styles = host_styles

    protected render() {
        return html`
            <layars-button-base>
                <slot></slot>
            </layars-button-base>
        `
    }
}

export { LayarsButtonStyled }
export default LayarsButtonStyled