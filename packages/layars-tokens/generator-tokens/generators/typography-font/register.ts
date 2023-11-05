import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'typography/font',
    file: 'typography/font.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'typography' &&
            mode.name === 'Shared' &&
            variable.name.startsWith('font')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = variable.value

        setWith(tokens, `typography.${key}`, { description: '', type: 'font', value }, Object)
    },
})
