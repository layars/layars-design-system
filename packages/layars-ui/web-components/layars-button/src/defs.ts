import type { LayarsBaseCSSProperties, LayarsBaseStyles } from '@layars/types/web-components'

export type LayarsButtonElement = HTMLButtonElement

export interface LayarsButtonProperties {
    variant: 'solid' | 'outline' | 'ghost'
    color: 'purple' | 'green' | 'blue' | 'red' | 'orange' | 'seafoam' | 'moss' | 'cyan' | 'fuchsia' | 'indigo' | 'magenta' | 'yellow' | 'grey'
    size: 'sm' | 'md' | 'lg'
    type: 'button' | 'submit' | 'reset'
    fullWidth: boolean
    disabled: boolean
}

export interface LayarsButtonHTMLProperties extends LayarsButtonElement, LayarsButtonProperties {}

export interface LayarsButtonCSSProperties extends LayarsBaseCSSProperties {
    /** Background color of the button, when active and not interacted with */
    '--btn-base'?: string
    /** Background color of the button, during the hover interaction */
    '--btn-hover'?: string
    /** Background color of the button, during the pressed interaction */
    '--btn-pressed'?: string
    /** Background color for the outline and ghost button variants */
    '--btn-surface-base'?: string
    /** Background hover color for the outline and ghost button variants */
    '--btn-surface-hover'?: string
    /** Background pressed color for the outline and ghost button variants */
    '--btn-surface-pressed'?: string
    /** Color of the text and icon of the button */
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
