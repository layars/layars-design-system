import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { consume } from '@lit-labs/context'

import { config } from '@layars/ui-web-components-root/.config/layars.config.ts'

import { type ExtendedTheme, Theme, themeContext } from '@layars/theme-provider'

import { LayarsIconProperties, LayarsIconStyles } from './defs.ts'
import icon_styles from './styles/index.ts'

/**
 * Layars Icon Component
 * `@layars/icon`
 *
 * @element `layars-icon`
 *
 * @slot [slot] - default slot, used for the path(s) of the icon
 */
@customElement(`${config.web_components.prefix}-icon`)
class LayarsIcon extends LitElement {
    @consume({ context: themeContext, subscribe: true })
    @state()
    public theme: ExtendedTheme

    /**
     * The rendered size of the icon
     */
    @property({ reflect: true })
    public size: keyof ExtendedTheme['sizes'] | LayarsIconStyles['width'] = 'size_16'

    /**
     * The color of the icon
     */
    @property({ reflect: true })
    public color: keyof ExtendedTheme['color'] | LayarsIconStyles['color'] = 'text_solid'

    @property({ reflect: true })
    public viewBox: string = '0 0 16 16'

    @property({ reflect: false, attribute: 'disable-colorize' })
    public disableColorize: boolean = false

    @property({ reflect: false, attribute: 'color-override' })
    public colorOverride: LayarsIconStyles['color'] = '#393939'

    // Styles accesibility value
    #styles: LayarsIconStyles = {}

    /**
     * Style overrides for the icon
     * Can be a map of any CSS properties, including overriding default styles of the icon.
     *
     * @example
     * const styles: LayarsIconStyles = {
     *   // Can override general style declaration - `CSSStyleDecalaration`
     *   fill: 'red'
     *   // Can also override as general CSSS properties - `CSS.PropertiesHyphened`
     *   'fill-color': 'red'
     *   // Can override global style vars
     *   '--layars-border-radius-lg': '1rem'
     *   // Can override local style vars
     *   '--icon-color': 'var(--layars-color-surface-gold)'
     * }
     */
    @property({ type: Object })
    public get styles(): LayarsIconStyles {
        return {
            // @ts-ignore
            '--icon-color': this.theme.color[this.color!]
                ? `var(--layars-color-${this.color?.replace('_', '-')})`
                : this.color,
            // @ts-ignore
            '--icon-width': this.theme.sizes[this.size!]
                ? // @ts-ignore @todo
                  `var(--layars-sizes-${this.size?.replace('_', '-')})`
                : this.size,
            // @ts-ignore
            '--icon-height': this.theme.sizes[this.size!]
                ? // @ts-ignore @todo
                  `var(--layars-sizes-${this.size?.replace('_', '-')})`
                : this.size,
            ...this.#styles,
        }
    }

    // styles setter
    public set styles(value: LayarsIconStyles) {
        // Hold old value for lit request update
        const oldValue = this.#styles

        // Set new styles value
        this.#styles = value

        // Request update with styles against old value
        this.requestUpdate('styles', oldValue)
    }

    constructor() {
        super()
    }

    protected colorize() {
        const colorizeAttribute = (attribute: string) => {
            const elements = this.querySelectorAll(`[${attribute}]`)

            elements.forEach((el) => {
                if (el.getAttribute(attribute) === this.colorOverride) {
                    el.setAttribute(attribute, 'var(--icon-color)')
                }
            })
        }

        if (!this.disableColorize) {
            colorizeAttribute('fill')
            colorizeAttribute('stroke')
        }
    }

    protected async setup() {
        await this.updateComplete

        this.colorize()
    }

    protected render() {
        const styles = new Theme({ custom: true, type: 'icon', styles: this.styles })

        this.setup()

        return html`
            <style>
                :host {
                    ${styles.toCSS()};
                }
            </style>
            <span
                part="wrapper"
                class=${classMap({
                    ['layars-icon']: true,
                })}
            >
                <slot part="svg"></slot>
            </span>
        `
    }

    static styles = icon_styles
}

export type { LayarsIconStyles, LayarsIconProperties }

export { LayarsIcon }
export default LayarsIcon
