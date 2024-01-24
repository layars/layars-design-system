import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LayarsButtonStyled } from './layars-button-styled.js'
import './layars-button-styled.js'

interface Args extends LayarsButtonStyled {
    slot: string
}

const Render = (args: Args) => {
    const {
        slot,
        disabled,
        size,
        color,
        variant,
    } = args

    return html`
        <layars-button-styled
            ?disabled=${disabled}
            .size=${size}
            .color=${color}
            .variant=${variant}
        >
            ${slot}
        </layars-button-styled>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-button-styled',
    component: 'layars-button-styled',
    render: Render,
    args: {
        slot: 'Button',
        size: 'md',
        color: 'brand',
        variant: 'solid',
    },
    argTypes: {
        slot: {
            defaultValue: 'Button',
            control: {
                type: 'text',
            },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            control: { type: 'inline-radio' },
        },
        variant: {
            options: ['solid', 'outline', 'ghost'],
            defaultValue: 'solid',
            control: { type: 'inline-radio' },
        },
        color: {
            options: ['brand', 'accent', 'neutral', 'destructive', 'inverse'],
            defaultValue: 'brand',
            control: { type: 'inline-radio' },
        },
        disabled: { control: { type: 'boolean' } },
    },
}

export default meta

type Story = StoryObj<LayarsButtonStyled>

export const Default: Story = {
    args: {
        slot: 'Button',
        size: 'md',
        color: 'brand',
        variant: 'solid',
        disabled: false
    }
}