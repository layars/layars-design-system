import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import type { TemplateResult } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

const Send = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="#42515F" d="M12 2a1 1 0 0 1 .894.553l9 18a1 1 0 0 1-1.11 1.423L12 20.024l-8.783 1.952a1 1 0 0 1-1.111-1.423l9-18A1 1 0 0 1 12 2Zm1 16.198 6.166 1.37L13 7.236v10.962ZM11 7.236 4.834 19.568 11 18.198V7.236Z"/>
</svg>
`

const Facebook = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill="#42515F" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
  </defs>
</svg>
`

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
        slot: html`${unsafeHTML(Send)}`,
        size: 'size_32',
        color: 'text_primary',
    },
}

export const Custom: Story = {
    args: {
        slot: html`${unsafeHTML(Facebook)}`,
        size: 'size_32',
        disableColorize: true,
    },
}
