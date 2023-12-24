import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LayarsLink } from './layars-link.js'

import './layars-link.js'

interface Args extends LayarsLink {
    slot: string
}

const Render = (args: Args) => {
    const {
        slot,
        variant,
        size,
        quiet,
    } = args

    return html`
        <layars-link
            .variant=${variant}
            .size=${size}
            ?quiet=${quiet}
            url="https://www.google.com"
            target="_blank"
        >
            ${slot}
        </layars-link>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-link',
    component: 'layars-link',
    render: Render,
    args: {
        slot: 'Navigate to Google',
        variant: 'primary',
        size: 'md',
        quiet: false
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'inverse'],
            defaultValue: 'primary',
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['sm', 'md'],
            defaultValue: 'md',
            control: { type: 'inline-radio' },
        },
        quiet: { control: { type: 'boolean' } },
    }
}

export default meta

type Story = StoryObj<LayarsLink>

export const Default: Story = {
}

export const Variant: Story = {
    args: {
        slot: 'Navigate to Google',
        variant: 'primary',
    },
    parameters: {
        controls: {
            include: ['variant'],
        },
    },
}

export const Size: Story = {
    args: {
        slot: 'Navigate to Google',
        size: 'md',
    },
    parameters: {
        controls: {
            include: ['size'],
        },
    },
}

export const Quiet: Story = {
    args: {
        slot: 'Navigate to Google',
        quiet: false,
    },
    parameters: {
        controls: {
            include: ['quiet'],
        },
    },
}
