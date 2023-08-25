import fs from 'node:fs'

import StyleDictionary from 'style-dictionary'
import _ from 'lodash'
import Mustache from 'mustache'

import { dirname } from '@layars/root/utils/dirname.js'

StyleDictionary.registerFormat({
    name: 'json-css-vars',
    formatter: ({ dictionary }) => {
        const template = fs.readFileSync(`${dirname(import.meta.url)}css-vars.json.template`, {
            encoding: 'utf8',
        })

        const properties = _.map(dictionary.allProperties, (property, index) => ({
            ...property,
            isNotLast: index < dictionary.allProperties.length - 1,
        }))

        return Mustache.render(template, { properties })
    },
})
