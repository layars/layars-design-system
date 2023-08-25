import { css } from 'lit'

const solid = css`
    .variant--solid:enabled,
    .variant--solid.enabled {
        background-color: var(--btn-base);
        border-color: var(--btn-base);
        color: var(--btn-text);
    }

    .variant--solid .icon .path {
        fill: var(--bts-icon);
    }

    .variant--solid:hover,
    .variant--solid.hover {
        background-color: var(--btn-hover);
        border-color: var(--btn-hover);
    }

    .variant--solid:focus,
    .variant--solid.focus {
        box-shadow: inset 0 0 0 1px var(--btn-base), inset 0px 0 0 2px var(--btn-focus);
    }

    .variant--solid:focus:hover,
    .variant--solid.focus:hover {
        box-shadow: inset 0 0 0 1px var(--btn-hover), inset 0px 0 0 2px var(--btn-focus);
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
        fill: var(--bts-on-disabled);
    }

    .variant--solid.size--xl:focus,
    .variant--solid.size--xl.focus {
        box-shadow: inset 0 0 0 2px var(--btn-base), inset 0px 0 0 4px var(--btn-focus);
    }
`

export default solid
