import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LayarsButtonGroup } from './layars-button-group.js'
import { LayarsButton } from '@layars/button'

import './layars-button-group.js'

interface Args extends LayarsButtonGroup {
    slot: string
}

const Render = (args: Args) => {
    const {
        slot,
        orientation,
        spacing
    } = args

    return html`
        <layars-button-group
            .orientation=${orientation}
            .spacing=${spacing}
        >
            <layars-button variant='ghost' color='grey'>Cancel</layars-button>
            <layars-button variant='solid' color='purple'>Submit</layars-button>
        </layars-button-group>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-button-group',
    component: 'layars-button-group',
    render: Render,
    args: {
        orientation: 'row',
        spacing: 'normal',
    },
    argTypes: {
        orientation: {
            options: ['row', 'column'],
            defaultValue: 'row',
            control: {
                type: 'inline-radio',
            },
        },
        spacing: {
            options: ['tight', 'normal', 'loose'],
            defaultValue: 'normal',
            control: { type: 'inline-radio' },
        },
    }
}

export default meta

type Story = StoryObj<LayarsButtonGroup>

export const Default: Story = {
}

export const Orientation: Story = {
    args: {
        orientation: 'row',
    },
    parameters: {
        controls: {
            include: ['orientation'],
        },
    },
}

export const Spacing: Story = {
    args: {
        spacing: 'normal',
    },
    parameters: {
        controls: {
            include: ['spacing'],
        },
    },
}
