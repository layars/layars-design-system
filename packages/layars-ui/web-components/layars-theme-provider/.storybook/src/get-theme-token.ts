import { LitElement, html } from 'lit'
import { customElement, state, property } from 'lit/decorators.js'
import { consume } from '@lit-labs/context'
import { get } from 'lodash-es'

// @ts-ignore
import { type ExtendedTheme, themeContext } from '../../src/layars-theme-context.js'

@customElement('get-theme-token')
class GetThemeToken extends LitElement {
    @consume({ context: themeContext, subscribe: true })
    @state()
    public theme: ExtendedTheme

    @property({ reflect: true })
    public path: string = 'meta.name'

    protected render() {
        console.log(this.theme)
        return html`${get(this.theme, this.path)}`
    }
}

export { GetThemeToken }

export default GetThemeToken
