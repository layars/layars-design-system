import { html, LitElement } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'

import { settings } from '@layars/utils/web-components'
import { default_styles } from './styles/index.ts'

import type { ButtonType } from './defs.ts'

@customElement(`${settings.prefix}-button-base`)
class LayarsButtonBase extends LitElement {
    /**
     * Is the button disabled
     */
    @property({ reflect: true, type: Boolean })
    public disabled: boolean = false

    @property({ reflect: true })
    public type: ButtonType = 'button'

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

    protected render() {
        return html`
            <button
                class="layars-button-base"
                part="button"
                type="${this.type}"
                ?disabled="${this.disabled}"
            >
                <slot name="icon-start" part="btn-icon-start"></slot>
                <slot part="btn-label"></slot>
                <slot name="icon-end" part="btn-icon-end"></slot>
            </button>
        `
    }

    static styles = default_styles
}

export { LayarsButtonBase }
export default LayarsButtonBase