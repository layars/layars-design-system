import type { Theme as LightTheme } from '@layars/tokens/light'
import type { Theme as DarkTheme } from '@layars/tokens/dark'
import type { LayarsBaseStyles } from '@layars/types/web-components'

interface LayarsThemeProviderThemes {
    light?: Partial<LightTheme>
    dark?: Partial<DarkTheme>
}

interface LayarsThemeProviderCustomThemes {
    [key: string]: Partial<LightTheme> & Record<string, any>
}

interface LayarsThemeProviderProperties {
    type: 'light' | 'dark' | string
    tokens: LayarsThemeProviderCustomThemes
    scope: 'global' | 'local'
    styles: Partial<LayarsBaseStyles>
}

export type {
    LayarsThemeProviderThemes,
    LayarsThemeProviderCustomThemes,
    LayarsThemeProviderProperties,
}
