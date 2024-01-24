const colors = (color: string, variant: string) => {
    if (variant === 'solid') {
        return [
            { variable: '--btn-surface', value: `var(--layars-color-action-${color}-enabled)` },
            { variable: '--btn-surface-hover', value: `var(--layars-color-action-${color}.pressed)` },
            { variable: '--btn-surface-active', value: `var(--layars-color-action-${color}.pressed)` },
            { variable: '--btn-content', value: `var(--layars-color-content-${(color === 'inverse') ? 'primary' : 'inverted-primary'})` },
            { variable: '--btn-border-color', value: `var(--layars-color-action-${color}-enabled)` },
            { variable: '--btn-border-color-hover', value: `var(--layars-color-action-${color}-hover)` },
            { variable: '--btn-border-color-active', value: `var(--layars-color-action-${color}-pressed)` },
        ]
    }
}

export { colors }
export default colors