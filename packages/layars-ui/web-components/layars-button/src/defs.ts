import type { LayarsBaseCSSProperties, LayarsBaseStyles } from '@layars/types/web-components'

export type LayarsButtonElement = HTMLButtonElement

export interface LayarsButtonProperties {
    variant: 'solid' | 'outline'
    color: 'default' | 'primary' | 'critical'
    size: 'small' | 'medium' | 'large'
    type: 'button' | 'submit' | 'reset'
    fullWidth: boolean
    disabled: boolean
    elevation: boolean
}

export interface LayarsButtonHTMLProperties extends LayarsButtonElement, LayarsButtonProperties {}

export interface LayarsButtonCSSProperties extends LayarsBaseCSSProperties {
    /** Background color of the button, when active and not interacted with */
    '--btn-base'?: string
    /** Background color of a subdued button, when active and not interacted with */
    '--btn-base-subdued'?: string
    /** Background color of the button, during the hover interaction */
    '--btn-hover'?: string
    /** Background color of the button, during the pressed interaction */
    '--btn-pressed'?: string
    /** Border color of the button, during the focus interaction */
    '--btn-focus'?: string
    /** Color of the text of the button */
    '--btn-text'?: string
    /** Color of the icon of the button */
    '--btn-icon'?: string
    /** Background color of the button, when disabled */
    '--btn-disabled'?: string
    /** Background color of the subdued button, when disabled */
    '--btn-disabled-subdued'?: string
    /** Color of the elements (text/icons) on top of a disabled button */
    '--btn-on-disabled'?: string
}

export interface LayarsButtonStyles extends LayarsBaseStyles, LayarsButtonCSSProperties {
    // Allow any property
    [key: string]: any
}
