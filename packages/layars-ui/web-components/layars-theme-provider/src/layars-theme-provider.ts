import { html, LitElement, css, render } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { provide } from '@lit-labs/context'

import { _themeContext, themeContext, Theme, cssvarsContext } from './layars-theme-context.js'
import type { LayarsThemeProviderProperties, LayarsThemeProviderThemes } from './defs.js'

/**
 * **Layars Theme Provider Component**
 *
 * `@layars/theme-provider`
 *
 * @element `layars-theme-provider`
 *
 * @slot [slot] - default slot, all children of the theme
 */
@customElement(`layars-theme-provider`)
class LayarsThemeProvider extends LitElement implements LayarsThemeProviderProperties {
    /**
     * The type of the theme variables
     */
    @property({ reflect: true })
    public type: LayarsThemeProviderProperties['type'] = 'light'

    /**
     * Provide custom tokens to the theme-provider
     */
    @property({ type: Object, reflect: false })
    public tokens: LayarsThemeProviderProperties['tokens'] = {}

    /**
     * Should the theme variables be scoped localy instead of globally
     * This will add the theme variables to the shadow-root of the theme provider instead of the head of the document
     */
    @property({ reflect: true })
    public scope: LayarsThemeProviderProperties['scope'] = 'global'

    /**
     * The global font stack to apply
     */
    @property({ reflect: false })
    public font = {
        family: 'Roboto, arial, sans-serif',
    }

    @property({ reflect: false })
    public styles: LayarsThemeProviderProperties['styles'] = {}

    @provide({ context: _themeContext })
    @state()
    public _theme: Theme

    @provide({ context: themeContext })
    @state()
    public theme: ReturnType<Theme['get']>

    @provide({ context: cssvarsContext })
    @state()
    public cssvars: ReturnType<Theme['cssvars']>

    constructor() {
        super()
    }

    public css() {
        return this._theme.toCSS()
    }

    public fonts() {
        return css`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
        `
    }

    public globalStyles() {
        if (this.scope === 'global') {
            render(
                html`
                    <style id="layars-global-variables">
                        :root {
                            ${this.fonts()};
                            ${this.css()};
                        }
                    </style>
                `,
                document.head,
            )
        }
    }

    public localStyles() {
        if (this.scope === 'local') {
            return html`
                <style id="layars-local-variables">
                    :host {
                        ${this.fonts()};
                        ${this.css()};
                    }
                </style>
            `
        }

        return ''
    }

    protected render() {
        // Update providers
        this._theme = new Theme({ type: this.type, tokens: this.tokens, styles: this.styles })

        this.theme = this._theme.get()
        this.cssvars = this._theme.cssvars()

        // Create global styles (if applicable)
        this.globalStyles()

        // Create local styles (if applicable)
        const localStyles = this.localStyles()

        return html`
            ${localStyles}
            <slot></slot>
        `
    }
}

export type { LayarsThemeProviderThemes }

export { LayarsThemeProvider }

export default LayarsThemeProvider
