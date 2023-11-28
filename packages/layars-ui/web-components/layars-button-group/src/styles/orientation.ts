import { css } from 'lit'

const orientation = css`
    .orientation--row {
        display: inline-flex;
        flex-direction: row;
    }

    .orientation--column {
        display: flex;
        flex-direction: column;
    }

    .orientation--column {
        width: 100%;
    }
`

export { orientation }

export default orientation