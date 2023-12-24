import type { LayarsBaseStyles } from '@layars/types/web-components'

export type LayarsLinkElement = HTMLAnchorElement

export interface LayarsLinkProperties {
    variant: 'primary' | 'secondary' | 'inverse'
    size: 'sm' | 'md',
    quiet: boolean
    url: string
}

export interface LayarsLinkHTMLProperties extends LayarsLinkElement, LayarsLinkProperties {}


export interface LayarsLinkStyles extends LayarsBaseStyles {
    // Allow any property
    [key: string]: any
}
