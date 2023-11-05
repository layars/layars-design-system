import StyleDictionary from 'style-dictionary'

/**
 * Custom transform for web properties. Converts those tokens that are
 * related to sizing to REM. Overrides default size/rem attribute from
 * Style-Dictionary library.
 */
StyleDictionary.registerTransform({
    name: 'size/rem',
    type: 'value',
    matcher: (prop) => {
        const category = prop.attributes?.category || ''
        const type = prop.type

        return ['sizes', 'grid', 'border'].includes(category) || ['sizes'].includes(type)
    },
    transformer: (prop) => {
        return `${prop.value}rem`
    },
})
