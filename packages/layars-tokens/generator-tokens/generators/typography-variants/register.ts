import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getPxToRem, getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'typography/variants',
    file: 'typography/variants.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return collection.name === 'Typography' && mode.name === 'Style'
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = {
            'font-size': {
                type: 'sizes',
                value: getPxToRem(variable.value.fontSize),
            },
            'font-weight': {
                type: 'string',
                value: variable.value.fontWeight,
            },
            'line-height': {
                type: 'sizes',
                value: getPxToRem(variable.value.lineHeight),
            },
            'letter-spacing': {
                type: 'sizes',
                value: getPxToRem(variable.value.letterSpacing),
            },
        }

        setWith(tokens, `typography.${key}`, value, Object)
    },
})
