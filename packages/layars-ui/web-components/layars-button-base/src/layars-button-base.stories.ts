import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LayarsButtonBase } from './layars-button-base.js'
import './layars-button-base.js'

interface Args extends LayarsButtonBase {
    slot: string
}

const Render = (args: Args) => {
    const {
        slot,
        type,
        disabled,
    } = args

    return html`
        <layars-button-base
            .type=${type}
            ?disabled=${disabled}
        >
            ${slot}
        </layars-button-base>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-button-base',
    component: 'layars-button-base',
    render: Render,
    args: {
        slot: 'Button',
        type: 'button',
    },
    argTypes: {
        slot: {
            defaultValue: 'Button',
            control: {
                type: 'text',
            },
        },
        type: {
            options: ['button', 'submit', 'reset'],
            defaultValue: 'button',
            control: { type: 'inline-radio' },
        },
        disabled: { control: { type: 'boolean' } },
    },
}

export default meta

type Story = StoryObj<LayarsButtonBase>

export const Default: Story = {
    args: {
        slot: 'Button',
        disabled: true
    }
}