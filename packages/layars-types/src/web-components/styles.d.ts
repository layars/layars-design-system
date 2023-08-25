import type * as CSS from 'csstype'

import { StyleInfo } from 'lit-html/directives/style-map.js'

import type { LayarsCSSVars } from '@layars/tokens/light/css-vars.js'

/**
 * Base CSS Properties
 *
 * Provides strict hyphenated CSS property types along with Layars CSS variables.
 *
 * Strictly extends
 * * `CSS.PropertiesHyphen`
 *   * For CSS hyphenated properties
 *   * `background-color: blue`
 * * `LayarsCSSVars`
 *   * For Layars CSS Variables
 *   * `--layars-color-surface-default: hsl(0, 0%, 100%, 1)`
 */
export interface LayarsBaseCSSProperties extends CSS.PropertiesHyphen, LayarsCSSVars {
    [key: string]: any
}

/**
 * Base CSS Declaration Styles
 *
 * Provides strict `CSSDeclarationStyle` types along with Layars declaration styles.
 *
 * Strictly extends
 * * `CSS.Properties`
 *   * For `CSSDeclarationStyle`-like properties
 *   * `backgroundColor: blue`
 */
export interface LayarsBaseCSSDeclarationStyle extends CSS.Properties {
    [key: string]: any
}

/**
 * Base Styles
 *
 * Provides helpers from strict types
 * * `LayarsBaseCSSDeclarationStyle`
 * * `LayarsBaseCSSProperties`
 * while remaining open for custom and loosely defined styles.
 *
 * Useful for utilizing/discovering Layars CSS Variables in code.
 *
 * Loosely extends
 * * `CSS.Properties`
 *   * For `CSSDeclarationStyle`-like properties
 *   * `backgroundColor: blue`
 * * `CSS.PropertiesHyphen`
 *   * For CSS hyphenated properties
 *   * `background-color: blue`
 * * `LayarsCSSVars`
 *   * For Layars CSS Variables
 *   * `--layars-color-surface-default: hsl(0, 0%, 100%, 1)`
 * * `StyleInfo`
 *   * For opened index string to use with lit's `styleMap`
 *   * `styleMap(styles: LayarsBaseStyles)`
 */
export interface LayarsBaseStyles
    extends CSS.Properties,
        LayarsBaseCSSDeclarationStyle,
        LayarsBaseCSSProperties,
        StyleInfo {
    [key: string]: any
}
