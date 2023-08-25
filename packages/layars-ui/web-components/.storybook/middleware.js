/* eslint-disable */
const cors = require('cors')

const expressMiddleWare = (app) => {
    app.use(
        cors({
            origin: 'http://localhost:8008',
            credentials: true,
        }),
    )
}

module.exports = expressMiddleWare
