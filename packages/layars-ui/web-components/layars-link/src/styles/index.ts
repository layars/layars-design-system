import { css } from 'lit'

import { variant } from './variant.ts'
import { size } from './size.ts'
import { quiet } from './quiet.ts'

const link_styles = css`
    a {
        font-family: var(--layars-typography-font-family);
    }

    ${variant}
    ${size}
    ${quiet}
`

export default link_styles
