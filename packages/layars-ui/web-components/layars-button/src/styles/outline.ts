import { css } from 'lit'

const outline = css`
    .variant--outline:enabled,
    .variant--outline.enabled,
    .variant--outline:enabled,
    .variant--outline.enabled {
        background-color: var(--btn-surface-base);
        border-color: var(--btn-base);
        color: var(--btn-base);
    }

    .variant--outline .icon .path {
        fill: var(--btn-base);
    }

    .variant--outline:hover,
    .variant--outline.hover {
        background-color: var(--btn-surface-hover);
        border-color: var(--btn-hover);
        color: var(--btn-hover);
    }

    .variant--outline:focus,
    .variant--outline.focus {
        background-color: var(--btn-surface-base);
        border-color: var(--btn-base);
        color: var(--btn-base);
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--outline:focus:hover,
    .variant--outline.focus:hover {
        background-color: var(--btn-surface-hover);
        border-color: var(--btn-hover);
        color: var(--btn-hover);
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--outline:active,
    .variant--outline.active,
    .variant--outline:focus:active {
        background-color: var(--btn-surface-pressed);
        border-color: var(--btn-pressed);
        color: var(--btn-pressed);
    }

    .variant--outline:disabled,
    .variant--outline.disabled {
        background-color: transparent;
        border-color: var(--btn-disabled);
        color: var(--btn-disabled);
    }

    .variant--primary:disabled .icon .path,
    .variant--primary.disabled .icon .path {
        fill: var(--btn-disabled);
    }
`

export default outline
