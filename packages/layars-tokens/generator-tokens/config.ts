import { workspaces } from '@layars/root/utils/workspaces.js'

import TokensDictionary from './classes/TokensDictionary.js'

import variables from '../input/variables.json' assert { type: 'json' }

// Primitives
import './generators/primitives-colors/register.js'
import './generators/primitives-sizes/register.js'

// Effects
import './generators/effects-elevation/register.js'

// Colors
import './generators/colors-surface-light/register.js'
import './generators/colors-surface-dark/register.js'
import './generators/colors-content-light/register.js'
import './generators/colors-content-dark/register.js'
import './generators/colors-border-light/register.js'
import './generators/colors-border-dark/register.js'
import './generators/colors-action-light/register.js'
import './generators/colors-action-dark/register.js'
import './generators/colors-disabled-light/register.js'
import './generators/colors-disabled-dark/register.js'
import './generators/colors-focus-light/register.js'
import './generators/colors-focus-dark/register.js'
import './generators/colors-elevation-light/register.js'
import './generators/colors-elevation-dark/register.js'

// Sizes
import './generators/sizes-radius-desktop/register.js'
import './generators/sizes-radius-mobile/register.js'
import './generators/sizes-spacing-desktop/register.js'
import './generators/sizes-spacing-mobile/register.js'

// Typography
import './generators/typography-font/register.js'
import './generators/typography-variants/register.js'

// Misc
import './generators/misc-z-index/register.js'

// Grid
import './generators/grid-breakpoint/register.js'
import './generators/grid-padding/register.js'
import './generators/grid-margin/register.js'

const config: Parameters<typeof TokensDictionary.config>[0] = {
    variables,
    output: `${workspaces['@layars/tokens'].path}/tokens`,
}

export { config }

export default config
