import { css } from 'lit'

/**
 * Shared styles across all version of button
 */
const shared = css`
    button {
        box-sizing: border-box;
        border-radius: var(--layars-sizes-size-4);
        cursor: pointer;
        outline: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
        border-style: solid;
        border-width: var(--layars-size-size-2);
        height: 100%;
        letter-spacing: 0.05rem;
        font-family: var(--layars-typography-font-family);
        font-weight: var(--layars-typography-font-weight-bold);
        /** Disable user selecting text in Safari */
        user-select: none;
        -webkit-user-select: none;
    }

    button::-moz-focus-inner {
        border: 0;
    }

    .disabled,
    button:disabled {
        cursor: not-allowed;
    }

    .disabled:active,
    button:disabled:active {
        pointer-events: none;
    }

    .full-width {
        display: flex;
        width: 100%;
    }

    .elevation {
        filter: var(--layars-drop-shadows-shadow-03);
    }

    slot::slotted([slot='item-before']:not(:empty)) {
        margin-right: var(--layars-sizes-size-8);
    }

    slot::slotted([slot='item-after']:not(:empty)) {
        margin-left: var(--layars-sizes-size-8);
    }
`

export default shared
