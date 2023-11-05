import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransformGroup({
    name: 'custom/js',
    transforms: ['attribute/cti', 'name/cti/pascal', 'size/rem', 'effect/elevation'],
})
