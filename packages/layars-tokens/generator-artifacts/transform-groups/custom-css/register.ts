import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem'],
})
