import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'primitives/colors',
    file: 'primitives/colors.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'primitives' &&
            mode.name === 'Shared' &&
            variable.type === 'color' &&
            variable.name.startsWith('color')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = variable.value

        setWith(tokens, `${key}`, { description: '', type: variable.type, value }, Object)
    },
})
