import { css } from 'lit'

/**
 * Styles to handle the different sizes of the button
 */
const sizes = css`
    .size--small {
        height: var(--layars-sizes-size-40);
        padding: 0 var(--layars-sizes-size-20);
        font-size: var(--layars-sizes-size-12);
        line-height: var(--layars-sizes-size-16);
    }

    .size--medium {
        height: var(--layars-sizes-size-48);
        padding: 0 var(--layars-sizes-size-32);
        font-size: var(--layars-sizes-size-14);
        line-height: var(--layars-sizes-size-24);
    }

    .size--large {
        height: var(--layars-sizes-size-56);
        padding: 0 var(--layars-sizes-size-32);
        font-size: var(--layars-sizes-size-16);
        line-height: var(--layars-sizess-size-24);
    }
`

export default sizes
