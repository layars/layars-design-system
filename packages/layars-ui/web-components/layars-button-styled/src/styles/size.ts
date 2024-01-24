const sizes = (size: string) => {
    if (size === 'sm') {
        return [
            { variable: '--btn-height', value: 'var(--layars-sizes-size-32' },
            { variable: '--btn-padding-left', value: 'var(--layars-sizes-size-20' },
            { variable: '--btn-padding-right', value: 'var(--layars-sizes-size-20' },
        ]
    }

    if (size === 'lg') {
        return [
            { variable: '--btn-height', value: 'var(--layars-sizes-size-48' },
            { variable: '--btn-padding-left', value: 'var(--layars-sizes-size-32' },
            { variable: '--btn-padding-right', value: 'var(--layars-sizes-size-32' },
        ]
    }

    return [
        { variable: '--btn-height', value: 'var(--layars-sizes-size-40' },
        { variable: '--btn-padding-left', value: 'var(--layars-sizes-size-24' },
        { variable: '--btn-padding-right', value: 'var(--layars-sizes-size-24' },
    ]
}

export { sizes }
export default sizes