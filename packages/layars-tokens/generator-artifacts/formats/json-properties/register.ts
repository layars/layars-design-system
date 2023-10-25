import StyleDictionary from 'style-dictionary'

import _ from 'lodash'

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a JSON of all properties.
 */
StyleDictionary.registerFormat({
    name: 'json-properties',
    formatter: ({ dictionary }) => {
        const jsonProperties = JSON.stringify(dictionary.allProperties, null, 4)

        return `${jsonProperties}\n`
    },
})
