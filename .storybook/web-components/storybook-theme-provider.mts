import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// Include `layars-theme-provider` web component
import '@layars/theme-provider'

// Create theme provider web component for storybook
// Isolates `layars-theme-provider` from rest of storybook
// Used in the parent of `.storybook-root`
@customElement('storybook-theme-provider')
class StorybookThemeProvider extends LitElement {
    @property({ reflect: true })
    public type = 'light'

    protected render() {
        return html`
            <layars-theme-provider .type="${this.type}">
                <slot></slot>
            </layars-theme-provider>
        `
    }
}

export { StorybookThemeProvider }

export default StorybookThemeProvider
