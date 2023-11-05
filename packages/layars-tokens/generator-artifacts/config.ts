// Formats
import './formats/css-vars/register.js'
import './formats/js-tokens/register.js'
import './formats/json-css-vars/register.js'
import './formats/json-properties/register.js'
import './formats/json-tokens/register.js'
import './formats/ts-layars-css-vars/register.js'
import './formats/ts-tokens/register.js'

// Transforms
import './transforms/size-rem/register.js'
import './transforms/effect-elevation/register.js'

// Transform Groups
import './transform-groups/custom-css/register.js'
import './transform-groups/custom-js/register.js'
import './transform-groups/custom-json/register.js'

const config = {
    themes: ['light', 'dark'],
}

export { config }

export default config
