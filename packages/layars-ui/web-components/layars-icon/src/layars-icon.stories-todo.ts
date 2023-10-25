import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import type { TemplateResult } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

// @ts-ignore
import AccountFilled from '@layars/layars-icons-svgs/account-filled.svg?raw'
// @ts-ignore
import YouTube from '@layars/layars-icons-svgs/youtube.svg?raw'

import { LayarsIcon } from './layars-icon.js'
import './layars-icon.js'

type ArgsOverride = Omit<LayarsIcon, 'slot'>

interface Args extends ArgsOverride {
    slot: TemplateResult | string
}

const Render = (args: Args) => {
    const { size, color, viewBox, disableColorize, colorOverride } = args

    return html`
        <layars-icon
            class="story-icons"
            .size=${size}
            .color=${color}
            .viewBox=${viewBox}
            color-override=${colorOverride}
            ?disable-colorize=${disableColorize}
        >
            ${args.slot}
        </layars-icon>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-icon',
    component: 'layars-icon',
    render: Render,
    args: {
        slot: html`+`,
        size: 'size_16',
        color: 'text_primary',
        viewBox: '0 0 16 16',
        disableColorize: false,
        colorOverride: '#393939',
        styles: {},
    },
    argTypes: {
        slot: {
            defaultValue: {},
            control: {
                type: 'object',
            },
        },
    },
    parameters: {
        controls: {
            exclude: ['styles'],
        },
    },
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
    args: {
        slot: html`${unsafeHTML(AccountFilled)}`,
        size: 'size_32',
        color: 'text_primary',
    },
}

export const Custom: Story = {
    args: {
        slot: html`${unsafeHTML(YouTube)}`,
        size: 'size_32',
    },
}
