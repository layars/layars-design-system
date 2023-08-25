import type { LayarsBaseCSSProperties, LayarsBaseStyles } from '@layars/types/web-components'

export interface LayarsIconProperties {}

export interface LayarsIconCSSProperties extends Partial<LayarsBaseCSSProperties> {}

export interface LayarsIconStyles extends Partial<LayarsBaseStyles>, LayarsIconCSSProperties {
    // Allow any property
    [key: string]: any
}
