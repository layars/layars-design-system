import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import type { TemplateResult } from 'lit'

import * as Icons from './src/index.js'
import './src/index.js'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

type ArgsOverride = Omit<Icons.LayarsAccountFilled, 'slot'>

interface Args extends ArgsOverride {
    slot: TemplateResult | string
}

const Render = (args: Args) => {
    // @ts-ignore @todo
    const { size, color, viewBox } = args

    const icons = Object.values(Icons).map(
        (icon) =>
            html`
                ${unsafeHTML(
                    `<${icon.kebabName} class=${icon.kebabName} size=${size} color=${color} viewbox=${viewBox}></${icon.kebabName}>`,
                )}
            `,
    )

    return html` <div class="story-icons">${icons}</div> `
}

const meta: Meta<Args> = {
    title: '@layars/layars-icons-wc',
    component: 'layars-icons-wc',
    render: Render,
    args: {
        slot: html`+`,
        // @ts-ignore @todo
        size: 'size_16',
        color: 'text_primary',
        viewBox: '0 0 16 16',
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

export const LayarsIconsAll: Story = {
    name: 'all',
    args: {
        // @ts-ignore @todo
        size: 'size_32',
        color: 'text_primary',
    },
}
