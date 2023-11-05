import { setWith } from 'lodash-es'

import { TokensDictionary } from '../../classes/TokensDictionary.js'
import { getVariableNameToPath } from '../../utils/index.js'

TokensDictionary.registerGenerator({
    name: 'effects/elevation',
    file: 'effects/elevation.json',
    tokens: {},
    matcher: ({ properties }) => {
        const { collection, mode, variable } = properties

        return (
            collection.name === 'Effects' &&
            mode.name === 'Style' &&
            variable.type === 'effect' &&
            variable.name.startsWith('elevation')
        )
    },
    generator: ({ tokens, variable }) => {
        const key = getVariableNameToPath(variable.name)
        const value = variable.value.effects.map((effect) => {
            const shadow = {
                offset: `${effect.offset.x}px ${effect.offset.y}px`,
                blur: `${effect.radius}px`,
                spread: `${effect.spread}px`,
                color: `rgba(${effect.color.r}, ${effect.color.g}, ${effect.color.b}, ${effect.color.a})`,
            }

            return `${shadow.offset} ${shadow.blur} ${shadow.spread} ${shadow.color}`
        })

        setWith(tokens, `${key}`, { description: '', type: 'elevation', value }, Object)
    },
})
