import { css } from 'lit'

const variant = css`
    .variant--primary {
        color: var(--layars-color-action-brand-enabled);

        &:hover {
            color: var(--layars-color-action-brand-hover);
            text-decoration-thickness: var(--layars-sizes-size-2);
        }
    }

    .variant--secondary {
        color: var(--layars-color-content-secondary);

        &:hover {
            color: var(--layars-color-content-primary);
            text-decoration-thickness: var(--layars-sizes-size-2);
        }
    }

    .variant--inverse {
        color: var(--layars-color-content-inverted-secondary);

        &:hover {
            color: var(--layars-color-content-inverted-primary);
            text-decoration-thickness: var(--layars-sizes-size-2);
        }
    }
`

export { variant }

export default variant