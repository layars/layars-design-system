import type { LayarsBaseCSSProperties, LayarsBaseStyles } from '@layars/types/web-components'

export type LayarsButtonElement = HTMLButtonElement

export interface LayarsButtonProperties {
    variant: 'solid' | 'outline' | 'ghost'
    color: 'brand' | 'accent' | 'neutral' | 'destructive' | 'inverse'
    size: 'sm' | 'md' | 'lg'
    type: 'button' | 'submit' | 'reset'
    fullWidth: boolean
    disabled: boolean
    elevation: boolean
}

export interface LayarsButtonHTMLProperties extends LayarsButtonElement, LayarsButtonProperties {}

export interface LayarsButtonCSSProperties extends LayarsBaseCSSProperties {
    /** Background color of the button, when active and not interacted with */
    '--btn-base'?: string
    /** Background color of the button, during the hover interaction */
    '--btn-hover'?: string
    /** Background color of the button, during the pressed interaction */
    '--btn-pressed'?: string
    /** Border color of the button, during the focus interaction */
    '--btn-focus'?: string
    /** Color of the text of the button */
    '--btn-content'?: string
    /** Background color of the button, when disabled */
    '--btn-disabled'?: string
    /** Color of the elements (text/icons) on top of a disabled button */
    '--btn-on-disabled'?: string
}

export interface LayarsButtonStyles extends LayarsBaseStyles, LayarsButtonCSSProperties {
    // Allow any property
    [key: string]: any
}
