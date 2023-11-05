import StyleDictionary from 'style-dictionary'

/**
 * Custom transform for web properties.
 */
StyleDictionary.registerTransform({
    name: 'effect/elevation',
    type: 'value',
    matcher: ({ attributes }) => {
        const { category, type } = attributes || {}

        return category === 'effects' && type === 'elevation'
    },
    transformer: (prop) => {
        return `${prop.value.join(', ')}`
    },
})
