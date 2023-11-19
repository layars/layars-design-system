import { css } from 'lit'

const solid = css`
    .variant--solid:enabled,
    .variant--solid.enabled {
        background-color: var(--btn-base);
        border-color: var(--btn-base);
        color: var(--btn-content);
    }

    .variant--solid .icon .path {
        fill: var(--btn-content);
    }

    .variant--solid:hover,
    .variant--solid.hover {
        background-color: var(--btn-hover);
        border-color: var(--btn-hover);
    }

    .variant--solid:focus,
    .variant--solid.focus {
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--solid:focus:hover,
    .variant--solid.focus:hover {
        box-shadow: 0 0 0 var(--layars-sizes-size-4) var(--layars-color-focus-default);
    }

    .variant--solid:active,
    .variant--solid.active {
        background-color: var(--btn-pressed);
        border-color: var(--btn-pressed);
    }

    .variant--solid:disabled,
    .variant--solid.disabled {
        background-color: var(--btn-disabled);
        border-color: transparent;
        color: var(--btn-on-disabled);
    }

    .variant--solid:disabled .icon .path,
    .variant--solid.disabled .icon .path {
        fill: var(--btn-on-disabled);
    }
`

export default solid
