import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { settings } from '@layars/utils/web-components'

import { LayarsLinkProperties } from './defs.js'

import link_styles from './styles/index.ts'

@customElement(`${settings.prefix}-link`)
class LayarsLink extends LitElement implements LayarsLinkProperties {
    /**
     * The orientation of the button group
     */
    @property({ reflect: true })
    public variant: LayarsLinkProperties['variant'] = 'primary'

    /**
     * The padding width of the button group
     */
    @property({ type: Boolean, reflect: true, attribute: 'quiet' })
    public quiet: LayarsLinkProperties['quiet'] = false

    /**
     *  The url the link should navigate to
     */
    @property({ reflect: true })
    public url: LayarsLinkProperties['url'] = ''

    /**
     * The size of the link text (16px or 14px)
     */
    @property({ reflect: true })
    public size: LayarsLinkProperties['size'] = 'md'

    /**
     * The target of the link
     */
    @property({ reflect: true })
    public target: HTMLAnchorElement['target'] = '_self'

    protected render() {
        return html`
            <a 
                href=${this.url}
                target=${this.target}
                class=${classMap({
                    ['layars-link']: true,
                    [`variant--${this.variant}`]: this.variant,
                    [`size--${this.size}`]: this.size,
                    [`quiet`]: this.quiet,
                })}
            >
                <slot></slot>
            </a>
        `
    }

    static styles = link_styles
}

export type * from './defs.js'

export { LayarsLink }
export default LayarsLink
