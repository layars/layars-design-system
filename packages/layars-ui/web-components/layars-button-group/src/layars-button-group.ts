import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { config } from '@layars/web-components-root/.config/layars.config.js'

import { LayarsButtonGroupProperties } from './defs.js'

import button_group_styles from './styles/index.ts'

@customElement(`${config.web_components.prefix}-button-group`)
class LayarsButtonGroup extends LitElement implements LayarsButtonGroupProperties {
    /**
     * The orientation of the button group
     */
    @property({ reflect: true })
    public orientation: LayarsButtonGroupProperties['orientation'] = 'row'

    /**
     * The padding width of the button group
     */
    @property({ reflect: true })
    public spacing: LayarsButtonGroupProperties['spacing'] = 'normal'

    protected render() {
        return html`
            <div
                class=${classMap({
                    ['layars-button-group']: true,
                    [`orientation--${this.orientation}`]: this.orientation,
                    [`spacing--${this.spacing}`]: this.spacing
                })}  
            >
                <slot></slot>
            </div>
        `
    }

    static styles = button_group_styles
}

export type * from './defs.js'

export { LayarsButtonGroup }
export default LayarsButtonGroup
