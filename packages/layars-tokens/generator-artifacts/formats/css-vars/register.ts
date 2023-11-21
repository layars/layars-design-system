import fs from 'node:fs'

import StyleDictionary, { TransformedToken } from 'style-dictionary'
import _ from 'lodash'
import Mustache from 'mustache'

import { dirname } from '@layars/root/utils/dirname.js'

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a CSS vars string.
 */
StyleDictionary.registerFormat({
    name: 'css-vars',
    formatter: ({ dictionary }) => {
        const template = fs.readFileSync(`${dirname(import.meta.url)}css-vars.css.template`, {
            encoding: 'utf8',
        })

        const properties = dictionary.allProperties

        return Mustache.render(template, {
            properties,
            scheme: (dictionary.properties.meta.name as TransformedToken).value,
        })
    },
})
