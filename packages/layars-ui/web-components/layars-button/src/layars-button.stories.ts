import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LayarsButton } from './layars-button.js'

import './layars-button.js'

interface Args extends LayarsButton {
    slot: string
    ['item-before']: string
    ['item-after']: string
}

const Render = (args: Args) => {
    const {
        slot,
        ['item-before']: itemBefore,
        ['item-after']: itemAfter,
        variant,
        size,
        color,
        type,
        fullWidth,
        disabled,
        styles,
        onclick,
        onfocus,
        onkeydown,
    } = args

    return html`
        <layars-button
            .variant=${variant}
            .size=${size}
            .color=${color}
            .type=${type}
            ?full-width=${fullWidth}
            ?disabled=${disabled}
            @onclick=${onclick}
            @onfocus=${onfocus}
            @onkeydown=${onkeydown}
            .styles=${styles}
        >
            <span slot="item-before">${itemBefore}</span>
            ${slot}
            <span slot="item-after">${itemAfter}</span>
        </layars-button>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-button',
    component: 'layars-button',
    render: Render,
    args: {
        slot: 'Button',
        variant: 'solid',
        color: 'neutral',
        size: 'md',
        type: 'button',
    },
    argTypes: {
        slot: {
            defaultValue: 'Button',
            control: {
                type: 'text',
            },
        },
        ['item-before']: {
            defaultValue: 'Button',
            control: {
                type: 'text',
            },
        },
        ['item-after']: {
            defaultValue: 'Button',
            control: {
                type: 'text',
            },
        },
        variant: {
            options: ['solid', 'outline', 'ghost'],
            defaultValue: 'solid',
            control: {
                type: 'inline-radio',
            },
        },
        color: {
            options: ['brand', 'accent', 'neutral', 'destructive', 'inverse'],
            defaultValue: 'neutral',
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            control: { type: 'inline-radio' },
        },
        type: {
            options: ['button', 'submit', 'reset'],
            defaultValue: 'button',
            control: { type: 'inline-radio' },
        },
        fullWidth: { control: { type: 'boolean' } },
        disabled: { control: { type: 'boolean' } },
        styles: { control: 'object' },
        onclick: { action: 'click' },
        onfocus: { action: 'focus' },
        onkeydown: { action: 'keydown' },
    },
    parameters: {
        controls: {
            exclude: ['onclick', 'onfocus', 'onkeydown', 'full-width'],
        },
    },
}

export default meta

type Story = StoryObj<LayarsButton>

export const Default: Story = {
    args: {
        slot: 'Button',
    },
}

export const Variant: Story = {
    args: {
        slot: 'Button',
        variant: 'solid',
    },
    parameters: {
        controls: {
            include: ['slot', 'variant'],
        },
    },
}

export const Color: Story = {
    args: {
        slot: 'Button',
        color: 'destructive',
    },
    parameters: {
        controls: {
            include: ['slot', 'color'],
        },
    },
}

export const Size: Story = {
    args: {
        slot: 'Button',
        size: 'lg',
    },
    parameters: {
        controls: {
            include: ['slot', 'size'],
        },
    },
}

export const Styles: Story = {
    args: {
        slot: 'Button',
        styles: {
            '--btn-base': 'var(--layars-color-blue-700)',
            '--btn-hover': 'var(--layars-color-blue-500)',
            '--btn-pressed': 'var(--layars-color-blue-800)',
        },
    },
    parameters: {
        controls: {
            include: ['slot', 'styles'],
        },
    },
}
