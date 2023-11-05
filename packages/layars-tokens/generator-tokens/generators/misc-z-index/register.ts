import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'effects/z-index',
    file: 'effects/z-index.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return collection.name === 'z-index' && mode.name === 'Shared' && variable.type === 'number'
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = variable.value

        setWith(
            tokens,
            `elevation.z_index.${key}`,
            { description: '', type: 'z-index', value },
            Object,
        )
    },
})
