import { create } from '@storybook/theming/create'

type ThemeVars = ReturnType<typeof create>

const theme: ThemeVars = create({
    base: 'dark',
    brandTitle: 'Layars',
    brandUrl: 'https://laya.rs',
    // @todo
    brandImage: 'https://laya.rs/favicon.ico',
    brandTarget: '_self',
})

export default theme
