import { css } from 'lit'

const ghost = css`
    .variant--ghost:enabled,
    .variant--ghost.enabled,
    .variant--ghost:enabled,
    .variant--ghost.enabled {
        background-color: var(--btn-surface-base);
        border-color: transparent;
        color: var(--btn-base);
    }

    .variant--ghost .icon .path {
        fill: var(--btn-base);
    }

    .variant--ghost:hover,
    .variant--ghost.hover {
        background-color: var(--btn-surface-hover);
        border-color: transparent;
        color: var(--btn-hover);
    }

    .variant--ghost:focus,
    .variant--ghost.focus {
        background-color: var(--btn-surface-base);
        border-color: transparent;
        color: var(--btn-base);
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--ghost:focus:hover,
    .variant--ghost.focus:hover {
        background-color: var(--btn-surface-hover);
        border-color: transparent;
        color: var(--btn-hover);
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--ghost:active,
    .variant--ghost.active,
    .variant--ghost:focus:active {
        background-color: var(--btn-surface-pressed);
        border-color: transparent;
        color: var(--btn-pressed);
    }

    .variant--ghost:disabled,
    .variant--ghost.disabled {
        background-color: var(--btn-disabled);
        border-color: var(--btn-disabled);
        color: var(--btn-on-disabled);
    }

    .variant--primary:disabled .icon .path,
    .variant--primary.disabled .icon .path {
        fill: var(--btn-on-disabled);
    }
`

export default ghost
