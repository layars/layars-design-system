import fs from 'node:fs'

import StyleDictionary from 'style-dictionary'
import _ from 'lodash'
import Mustache from 'mustache'

import { dirname } from '@layars/root/utils/dirname.js'

/**
 * Custom formatter for style dictionary that takes in the tokens property files
 * and returns them as a type interface.
 */
StyleDictionary.registerFormat({
    name: 'ts-layars-css-vars',
    formatter: ({ dictionary }) => {
        const template = fs.readFileSync(`${dirname(import.meta.url)}css-vars.d.ts.template`, {
            encoding: 'utf8',
        })

        const properties = dictionary.allProperties

        return Mustache.render(template, { properties })
    },
})
