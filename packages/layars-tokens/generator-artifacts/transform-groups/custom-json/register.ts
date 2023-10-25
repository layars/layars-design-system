import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransformGroup({
    name: 'custom/json',
    transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem'],
})
