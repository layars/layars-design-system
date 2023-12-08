import { html, LitElement, unsafeCSS } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { Theme } from '@layars/theme-provider'

import { LayarsButtonProperties, LayarsButtonStyles } from './defs.js'
import button_styles from './styles/index.js'

/**
 * Layars Button Component
 * `@layars/button`
 *
 * @element `layars-button`
 *
 * @slot [slot] - default slot, used for the text of the button
 * @slot [item-before] - used to pass in icons or other elements to be used before the text of the button
 * @slot [item-after] - used to pass in icons or other elements to be used after the text of the button
 */
@customElement(`layars-button`)
class LayarsButton extends LitElement implements LayarsButtonProperties {
    /**
     * The variant of the button
     */
    @property({ reflect: true })
    public variant: LayarsButtonProperties['variant'] = 'solid'

    /**
     * The rendered size of the button
     */
    @property({ reflect: true })
    public size: LayarsButtonProperties['size'] = 'md'

    /**
     * The color of the button
     */
    @property({ reflect: true })
    public color: LayarsButtonProperties['color'] = 'neutral'

    /**
     * If the button should span 100% of its container
     * `true` when the button should span 100% width
     * `false` when the button should use auto width with default padding
     */
    @property({ type: Boolean, reflect: true, attribute: 'full-width' })
    public fullWidth: LayarsButtonProperties['fullWidth'] = false

    /**
     * Should the button be disabled
     */
    @property({ type: Boolean, reflect: true })
    public disabled: LayarsButtonProperties['disabled'] = false

    /**
     * Type of the button; defines the browser behavior of the button
     * Performs no browser behavior by default.
     *
     * @link https://developere.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
     */
    @property({ reflect: true })
    public type: LayarsButtonProperties['type'] = 'button'

    // Internal styles
    #styles: Partial<LayarsButtonStyles> = {}

    /**
     * Style overrides for the button
     * Can be a map of any CSS properties, including overriding default styles of the button.
     *
     * @example
     * const styles: LayarsButtonStyles = {
     *   // Can override general style declaration - `CSSStyleDecalaration`
     *   backgroundColor: 'red'
     *   // Can also override as general CSSS properties - `CSS.PropertiesHyphened`
     *   'background-color': 'red'
     *   // Can override global style vars
     *   '--layars-border-radius-lg': '1rem'
     *   // Can override local style vars
     *   '--btn-base': 'var(--layars-color-surface-gold)'
     * }
     */
    @property({ type: Object })
    public get styles(): Partial<LayarsButtonStyles> {
        // Switch on variant...
        switch (this.variant) {
            case 'outline':
            case 'ghost':
                return {
                    '--btn-base': `var(--layars-color-action-${this.color}-enabled)`,
                    '--btn-hover': `var(--layars-color-action-${this.color}-hover)`,
                    '--btn-pressed': `var(--layars-color-action-${this.color}-pressed)`,
                    '--btn-surface-base': this.variant === 'outline' ?
                        `transparent`:
                        `var(--layars-color-action-${this.color}-subtle-enabled)`,
                    '--btn-surface-hover': `var(--layars-color-action-${this.color}-subtle-hover)`,
                    '--btn-surface-pressed': `var(--layars-color-action-${this.color}-subtle-pressed)`,
                    '--btn-disabled': `var(--layars-color-disabled-surface)`,
                    '--btn-on-disabled': `var(--layars-color-disabled-content)`,
                    ...this.#styles,
                }

            case 'solid':
            default:
                return {
                    '--btn-base': `var(--layars-color-action-${this.color}-enabled)`,
                    '--btn-hover': `var(--layars-color-action-${this.color}-hover)`,
                    '--btn-pressed': `var(--layars-color-action-${this.color}-pressed)`,
                    '--btn-disabled': `var(--layars-color-disabled-surface)`,
                    '--btn-on-disabled': `var(--layars-color-disabled-content)`,
                    '--btn-focus': 'var(--layars-color-focus-default)',
                    '--btn-content': 'var(--layars-color-content-inverted-primary)',
                    ...this.#styles,
                }
        }
    }

    // styles setter
    public set styles(value: Partial<LayarsButtonStyles>) {
        // Hold old value for lit request update
        const oldValue = this.#styles

        // Set new styles value
        this.#styles = value

        // Request update with styles against old value
        this.requestUpdate('styles', oldValue)
    }

    /**
     * Handles propagation of events when disabled
     *
     * @param event - event to stop propagation
     */
    private _handleDisabledEvent(event: Event) {
        // If button is disabled,
        if (this.disabled) {
            // Stop propagation of event
            event.stopImmediatePropagation()
        }
    }

    /**
     * Handle click events within the component
     *
     * @param {Event} event - event to handle
     */
    @eventOptions({ capture: true })
    private _handleClick(event: Event) {
        // Handle event callback when disabled
        this._handleDisabledEvent(event)
    }

    /**
     * Handle focus events within the component
     *
     * @param {Event} event - event to handle
     */
    @eventOptions({ capture: true })
    private _handleFocus(event: Event) {
        // Handle event callback when disabled
        this._handleDisabledEvent(event)
    }

    constructor() {
        super()

        // Internal click and focus handlers
        this.addEventListener('click', this._handleClick)
        this.addEventListener('focus', this._handleFocus)
    }

    protected render() {
        const display = this.fullWidth ? 'flex' : 'inline-flex'

        const styles = new Theme({ custom: true, type: 'button', styles: this.styles })

        return html`
            <style>
                :host {
                    ${styles.toCSS()};
                    display: ${unsafeCSS(display)}
                }
            </style>
            <button
                part="button"
                class=${classMap({
                    ['layars-button']: true,
                    [`variant--${this.variant}`]: this.variant,
                    [`size--${this.size}`]: this.size,
                    [`color--${this.color}`]: this.color,
                    [`full-width`]: this.fullWidth,
                    [`btn--disabled`]: this.disabled,
                    [`disabled`]: this.disabled,
                })}
                type="${this.type}"
                ?disabled="${this.disabled}"
            >
                <slot
                    name="item-before"
                    part="btn-item-before"
                ></slot>
                <slot part="btn-label"></slot>
                <slot
                    name="item-after"
                    part="btn-item-after"
                ></slot>
            </button>
        `
    }

    static styles = button_styles
}

export type * from './defs.js'

export { LayarsButton }
export default LayarsButton
