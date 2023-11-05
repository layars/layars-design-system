import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath, getVariableToReference } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'sizes/desktop/spacing',
    file: 'sizes/desktop/spacing.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'sizeTokens' &&
            mode.name === 'Desktop' &&
            variable.type === 'number' &&
            variable.name.startsWith('spacing')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = getVariableToReference(variable)

        setWith(tokens, `sizes.desktop.${key}`, { description: '', type: 'sizes', value }, Object)
    },
})
