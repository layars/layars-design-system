import { css } from 'lit'

const outline = css`
    .variant--outline:enabled,
    .variant--outline.enabled {
        background-color: transparent;
        border-color: var(--btn-base);
        color: var(--btn-text);
    }

    .variant--outline .icon .path {
        fill: var(--bts-icon);
    }

    .variant--outline:hover,
    .variant--outline.hover {
        background-color: var(--btn-hover);
        border-color: var(--btn-base);
    }

    .variant--outline:focus,
    .variant--outline.focus {
        background-color: transparent;
        box-shadow: 0px 0 0 2px var(--btn-focus);
    }

    .variant--outline:focus:hover,
    .variant--outline.focus:hover {
        background-color: var(--btn-hover);
    }

    .variant--outline:active,
    .variant--outline.active,
    .variant--outline:focus:active {
        background-color: var(--btn-pressed);
        border-color: var(--btn-focus);
    }

    .variant--outline:disabled,
    .variant--outline.disabled {
        background-color: transparent;
        border-color: var(--btn-disabled);
        border-color: var(--btn-disabled);
    }

    .variant--primary:disabled .icon .path,
    .variant--primary.disabled .icon .path {
        fill: var(--bts-disabled);
    }
`

export default outline
