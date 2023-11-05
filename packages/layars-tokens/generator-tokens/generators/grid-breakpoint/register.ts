import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath, getVariableToReference } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'grid/breakpoint',
    file: 'grid/breakpoint.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'grid' &&
            mode.name === 'Shared' &&
            variable.type === 'string' &&
            variable.name.startsWith('breakpoint')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = getVariableToReference(variable)

        setWith(tokens, `grid.${key}`, { description: '', type: 'sizes', value }, Object)
    },
})
