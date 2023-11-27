import type { LayarsBaseStyles } from '@layars/types/web-components'

export type LayarsButtonGroupElement = HTMLDivElement

export interface LayarsButtonGroupProperties {
    orientation: 'row' | 'column'
    spacing: 'tight' | 'normal' | 'loose'
}

export interface LayarsButtonGroupHTMLProperties extends LayarsButtonGroupElement, LayarsButtonGroupProperties {}


export interface LayarsButtonGroupStyles extends LayarsBaseStyles {
    // Allow any property
    [key: string]: any
}
