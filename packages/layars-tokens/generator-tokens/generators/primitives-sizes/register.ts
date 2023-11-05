import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getPxToRem, getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'primitives/sizes',
    file: 'primitives/sizes.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'primitives' &&
            mode.name === 'Shared' &&
            variable.type === 'number' &&
            variable.name.startsWith('sizes')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
            // Remove sizes from path
            .replace('sizes.', '')
        const value = getPxToRem(variable.value)

        setWith(tokens, `sizes.${key}`, { description: '', type: 'sizes', value }, Object)
    },
})
