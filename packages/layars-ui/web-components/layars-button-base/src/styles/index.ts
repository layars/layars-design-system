import { css } from 'lit'

const default_styles = css`
    button {
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        display: var(--btn-display, inline-flex);
        gap: var(--btn-gap, 8px);
        align-items: center;
        
        font-size: var(--btn-font-size, 14px);
        line-height: var(--btn-line-height, normal);
        font-weight: var(--btn-font-weight, 400);
        font-family: var(--btn-font-family, Arial);
        color: var(--btn-content, #232A5C);

        background-color: var(--btn-surface, #E2E4FE);
        
        border-width: var(--btn-border-width, 1px);
        border-style: var(--btn-border-style, solid);
        border-color: var(--btn-border-color, #E2E4FE);
        border-radius: var(--btn-border-radius, 2px);
        
        height: var(--btn-height, 24px);
        padding-left: var(--btn-padding-left, 12px);
        padding-right: var(--btn-padding-right, 12px);

        &:hover {
            background-color: var(--btn-surface-hover, #C9CDFE);
            border-color: var(--btn-border-color-hover, #C9CDFE);
        }

        &:focus {
            outline-color: var(--btn-outline-color, #6269C5);
            outline-style: var(--btn-outline-style, solid);
            outline-width: var(--btn-outline-width, 2px);
        }

        &:active {
            background-color: var(--btn-surface-active, #ACB2FF);
            border-color: var(--btn-border-color-active, #ACB2FF);
        }

        &:disabled {
            cursor: not-allowed;

            &:active {
                pointer-events: none;
            }
        }
    }
`

export { default_styles }
export default default_styles