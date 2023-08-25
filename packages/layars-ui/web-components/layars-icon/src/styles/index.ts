import { css } from 'lit'

export const icon_styles = css`
    :host {
        display: inline-block;

        width: var(--icon-width);
        height: var(--icon-height);
    }

    :host(.start) {
        margin-right: var(--layars-sizes-size-8);
    }

    :host(.end) {
        margin-left: var(--layars-sizes-size-8);
    }

    slot::slotted(svg) {
        width: var(--icon-width);
        height: var(--icon-height);
    }
`

export default icon_styles
