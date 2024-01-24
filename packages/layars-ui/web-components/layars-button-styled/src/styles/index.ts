import { css } from 'lit'

const host_styles = css`
    :host {
        --btn-display: inline-flex;
        --btn-gap: var(--layars-sizes-size-8);
        --btn-font-size: var(--layars-sizes-size-16);
        --btn-line-height: var(--layars-sizes-size-24);
        --btn-font-weight: var(--layars-typography-font-weight-bold);
        --btn-font-family: var(--layars-typography-font-family);
        --btn-content: var(--layars-color-content-inverted-primary);
        --btn-surface: var(--layars-color-action-brand-enabled);
        --btn-border-width: var(--layars-sizes-size-1);
        --btn-border-style: solid;
        --btn-border-color: var(--layars-color-action-brand-enabled);
        --btn-border-radius: var(--layars-sizes-size-4);
        --btn-height: var(--layars-sizes-size-40);
        --btn-padding-left: var(--layars-sizes-size-24);
        --btn-padding-right: var(--layars-sizes-size-24);
        --btn-surface-hover: var(--layars-color-action-brand-hover);
        --btn-border-color-hover: var(--layars-color-action-brand-hover);
        --btn-outline-color: var(--layars-color-focus-default);
        --btn-outline-width: var(--layars-sizes-size-4);
        --btn-surface-active: var(--layars-color-action-brand-pressed);
        --btn-border-color-active: var(--layars-color-action-brand-pressed);
    }
`

export { host_styles }
export default host_styles