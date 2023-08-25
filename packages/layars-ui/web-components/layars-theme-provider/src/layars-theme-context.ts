import { createContext } from '@lit-labs/context'
import merge from 'lodash.merge'
import { flatten } from 'flat'

import { light, dark } from '@layars/tokens'
import type { LayarsCSSVars } from '@layars/tokens/light/css-vars.js'

import type {
    LayarsThemeProviderCustomThemes,
    LayarsThemeProviderProperties,
    LayarsThemeProviderThemes,
} from './defs.js'

export class Theme {
    #tokens: LayarsThemeProviderCustomThemes
    #type: LayarsThemeProviderProperties['type']
    #styles: LayarsThemeProviderProperties['styles']
    #custom: boolean

    constructor({
        type,
        tokens,
        styles,
        custom,
    }: Partial<LayarsThemeProviderProperties> & { custom?: boolean }) {
        this.#tokens = tokens || {}
        this.#type = type || 'light'
        this.#styles = styles || {}

        this.#custom = custom || false
    }

    get type() {
        return this.#type
    }

    set type(value) {
        this.#type = value
    }

    get tokens() {
        return this.#tokens
    }

    set tokens(value) {
        this.#tokens = value
    }

    get styles() {
        return this.#styles
    }

    set styles(value) {
        this.#styles = value
    }

    get custom() {
        return this.#custom
    }

    set custom(value) {
        this.#custom = value
    }

    get themes() {
        const defaultThemes: LayarsThemeProviderThemes = {
            light: { ...light },
            dark: { ...dark },
        }

        const mergedThemes = this.custom
            ? { [this.type]: this.styles }
            : merge({}, defaultThemes, this.tokens)

        return mergedThemes
    }

    public get() {
        return this.themes[this.type] as LayarsThemeProviderThemes['light'] & Record<string, any>
    }

    public flatten() {
        return flatten(this.get()) as LayarsCSSVars
    }

    public cssvars() {
        return Object.entries(this.flatten()).reduce(
            (vars, [key, value]) => ({
                ...vars,
                [!key.startsWith('--') ? `--layars-${key.replace(/[._]/g, '-')}` : key]: value,
            }),
            {},
        ) as LayarsCSSVars
    }

    public toCSS() {
        return Object.entries(this.cssvars()).reduce(
            (str, [key, value]) => `${str}${key}:${value};`,
            '',
        )
    }
}

export type ExtendedTheme = ReturnType<Theme['get']>
export type CSSVarsTheme = ReturnType<Theme['cssvars']>

export const _themeContext = createContext<Theme>(Symbol('_layars-theme'))
export const themeContext = createContext<ExtendedTheme>(Symbol('layars-theme'))
export const cssvarsContext = createContext<CSSVarsTheme>(Symbol('layars-cssvars'))
