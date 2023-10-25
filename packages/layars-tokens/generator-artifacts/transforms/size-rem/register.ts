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
        const checker = prop.attributes?.category

        return checker === 'sizes' || checker === 'grid' || checker === 'border'
    },
    transformer: (prop) => {
        return `${prop.value}rem`
    },
})
