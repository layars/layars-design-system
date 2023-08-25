import { type Preview } from '@storybook/web-components'
import { themes } from '@storybook/theming'

// Include Layars CSS Variables
import '@layars/tokens/light/css-vars.css'

// Include Storybook Preview CSS
import './preview.css'

// Include `storybook-theme-provider` web component
import './web-components/storybook-theme-provider.mjs'

// Include `layars-theme-provider` web component
import '@layars/theme-provider'

// Include `layars-button` web component
import '@layars/button'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            theme: themes.dark,
        },
        backgrounds: {
            disable: true,
            grid: {
                disable: true,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme mode',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror',
                items: [
                    { value: 'light', left: '🔆', title: 'light' },
                    { value: 'dark', left: '🌙', title: 'dark' },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
}

export default preview
