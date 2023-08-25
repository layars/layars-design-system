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
        elevation,
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
            ?elevation=${elevation}
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
        color: 'default',
        size: 'medium',
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
            options: ['solid' , 'outline'],
            defaultValue: 'solid',
            control: {
                type: 'inline-radio',
            },
        },
        color: {
            options: ['default', 'primary', 'critical'],
            defaultValue: 'default',
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'medium',
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
        variant: 'outline',
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
        color: 'critical',
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
        size: 'large',
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
            '--btn-base': 'var(--layars-color-surface-gold)',
            '--btn-hover': 'var(--layars-color-surface-gold-inverse)',
            '--btn-pressed': 'var(--layars-color-surface-gold-subdued)',
        },
    },
    parameters: {
        controls: {
            include: ['slot', 'styles'],
        },
    },
}
