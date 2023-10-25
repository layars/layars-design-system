import fs from 'node:fs'

import StyleDictionary from 'style-dictionary'
import _ from 'lodash'
import Mustache from 'mustache'

import { dirname } from '@layars/root/utils/dirname.js'

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns as a typescript file.
 */
StyleDictionary.registerFormat({
    name: 'ts-tokens',
    formatter: ({ dictionary }) => {
        const template = fs.readFileSync(`${dirname(import.meta.url)}theme.d.ts.template`, {
            encoding: 'utf8',
        })

        const properties = JSON.stringify(
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

        return Mustache.render(template, { properties })
    },
})
