import { css } from 'lit'

const spacing = css`
    .spacing--tight {
        gap: var(--layars-sizes-size-4);
    }

    .spacing--normal {
        gap: var(--layars-sizes-size-8);
    }

    .spacing--loose {
        gap: var(--layars-sizes-size-12);
    }
`

export { spacing }

export default spacing