import { html, LitElement, unsafeCSS } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { config } from '@layars/web-components-root/.config/layars.config.js'

import { LayarsButtonGroupProperties } from './defs.js'

@customElement(`${config.web_components.prefix}-button`)
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
}

export type * from './defs.js'

export { LayarsButtonGroup }
export default LayarsButtonGroup
