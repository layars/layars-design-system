import StyleDictionary from 'style-dictionary'

import _ from 'lodash'

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a JSON object.
 */
StyleDictionary.registerFormat({
    name: 'json-tokens',
    formatter: ({ dictionary }) => {
        const jsonProperties = JSON.stringify(
            _.reduce(
                dictionary.allProperties,
                (properties, property) => {
                    return _.setWith(properties, property.path, property.value, Object)
                },
                {},
            ),
            null,
            4,
        )

        return `${jsonProperties}\n`
    },
})
