import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath, getVariableToReference } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'colors/light/focus',
    file: 'colors/light/focus.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'colorTokens' &&
            mode.name === 'Light' &&
            variable.type === 'color' &&
            variable.name.startsWith('focus')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = getVariableToReference(variable)

        setWith(tokens, `color.${key}`, { description: '', type: 'color', value }, Object)
    },
})
