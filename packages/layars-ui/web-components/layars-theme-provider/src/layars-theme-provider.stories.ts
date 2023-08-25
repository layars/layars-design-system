import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import type { TemplateResult } from 'lit'
import merge from 'lodash.merge'

import * as tokens from '@layars/tokens'

import { _themeContext } from './layars-theme-context.js'

import { LayarsThemeProvider } from './layars-theme-provider.js'
import './layars-theme-provider.js'

import '@layars/button'
import '../.storybook/src/get-theme-token.js'

type ArgsOverride = Omit<LayarsThemeProvider, 'slot'>

interface Args extends ArgsOverride {
    slot: TemplateResult | string
}

const Render = (args: Args) => {
    const { scope, type, tokens } = args

    return html`
        <layars-theme-provider
            class="story-theme-provider"
            .scope=${scope}
            .type=${type}
            .tokens=${tokens}
        >
            ${args.slot}
        </layars-theme-provider>
    `
}

const meta: Meta<Args> = {
    title: '@layars/web-components/layars-theme-provider',
    component: 'layars-theme-provider',
    render: Render,
    args: {
        slot: html`<layars-button>Button</layars-button>`,
        scope: 'local',
        type: 'light',
    },
    argTypes: {
        slot: {
            defaultValue: {},
            control: {
                type: 'object',
            },
        },
        tokens: {
            defaultValue: {},
            control: {
                type: 'object',
            },
        },
        type: {
            options: ['light', 'dark'],
            defaultValue: 'light',
            control: {
                type: 'inline-radio',
            },
        },
        scope: {
            options: ['global', 'local'],
            defaultValue: 'global',
            control: {
                type: 'inline-radio',
            },
        },
    },
    parameters: {
        controls: {
            exclude: ['_theme', 'theme', 'cssvars', 'styles'],
        },
    },
}

export default meta

type Story = StoryObj<Args>

export const Default: Story = {
    args: {
        slot: html`
            <style>
                .default-row {
                    padding: var(--layars-sizes-size-16);
                    border-radius: var(--layars-border-radius-lg);
                    background-color: var(--layars-color-surface-default);
                }
                .default-spacer {
                    height: var(--layars-sizes-size-24);
                }
            </style>
            <div class="default-row">
                <layars-button variant="solid" color="default">Button</layars-button>
                <layars-button variant="outline" color="default">Button</layars-button>
                <div class="default-spacer"></div>
                <layars-button variant="solid" color="primary">Button</layars-button>
                <layars-button variant="outline" color="primary">Button</layars-button>
                <div class="default-spacer"></div>
                <layars-button variant="primary" color="critical">Button</layars-button>
                <layars-button variant="secondary" color="critical">Button</layars-button>
            </div>
        `,
    },
}

export const Scope: Story = {
    args: {
        slot: html`
            <style>
                .scope-row {
                    padding: var(--layars-sizes-size-16);
                    border-radius: var(--layars-border-radius-lg);
                    background-color: var(--layars-color-surface-default);
                }
                .scope-buttons > * {
                    margin: 0 var(--layars-sizes-size-4);
                }
                .scope-spacer {
                    height: var(--layars-sizes-size-24);
                }
            </style>
            <div class="scope-row">
                <div class="scope-buttons">
                    <layars-button variant="solid" color="default">Button</layars-button>
                    <layars-button variant="outline" color="default">Button</layars-button>
                </div>
                <div class="scope-spacer"></div>
                <layars-theme-provider scope="local" type="dark">
                    <div class="scope-row">
                        <div class="scope-buttons">
                            <layars-button variant="solid" color="default">Button</layars-button>
                            <layars-button variant="solid" color="default">Button</layars-button>
                        </div>
                        <div class="scope-spacer"></div>
                        <layars-theme-provider scope="local" type="light">
                            <div class="scope-row">
                                <div class="scope-buttons">
                                    <layars-button variant="solid" color="default">
                                        Button
                                    </layars-button>
                                    <layars-button variant="solid" color="default">
                                        Button
                                    </layars-button>
                                </div>
                            </div>
                        </layars-theme-provider>
                    </div>
                </layars-theme-provider>
            </div>
        `,
    },
    parameters: {
        controls: {
            include: ['slot', 'type'],
        },
    },
}

export const Context: Story = {
    args: {
        slot: html`
            <style>
                .context-row {
                    padding: var(--layars-sizes-size-16);
                    border-radius: var(--layars-border-radius-lg);
                    background-color: var(--layars-color-surface-default);
                }
                .context-header {
                    font-family: var(--layars-font-family-default);

                    color: var(--layars-color-content-default);
                }
                .context-buttons > * {
                    margin: 0 var(--layars-sizes-size-4);
                }
                .context-spacer {
                    height: var(--layars-sizes-size-24);
                }
            </style>
            <div class="context-row">
                <h2 class="context-header">
                    Theme: "<get-theme-token path="meta.name"></get-theme-token>"
                </h2>
                <div class="context-buttons">
                    <layars-button variant="solid" color="default">Button</layars-button>
                    <layars-button variant="solid" color="default">Button</layars-button>
                </div>
                <div class="context-spacer"></div>
                <layars-theme-provider scope="local" type="dark">
                    <div class="context-row">
                        <h2 class="context-header">
                            Theme: "<get-theme-token path="meta.name"></get-theme-token>"
                        </h2>
                        <div class="context-buttons">
                            <layars-button variant="solid" color="default">Button</layars-button>
                            <layars-button variant="solid" color="default">Button</layars-button>
                        </div>
                        <div class="context-spacer"></div>
                        <layars-theme-provider scope="local" type="light">
                            <div class="context-row">
                                <h2 class="context-header">
                                    Theme: "<get-theme-token path="meta.name"></get-theme-token>"
                                </h2>
                                <div class="context-buttons">
                                    <layars-button variant="solid" color="default">
                                        Button
                                    </layars-button>
                                    <layars-button variant="solid" color="default">
                                        Button
                                    </layars-button>
                                </div>
                            </div>
                        </layars-theme-provider>
                    </div>
                </layars-theme-provider>
            </div>
        `,
    },
    parameters: {
        controls: {
            include: ['slot', 'type'],
        },
    },
}

export const Tokens: Story = {
    args: {
        slot: html`
            <style>
                .tokens-row {
                    padding: var(--layars-sizes-size-16);
                    border-radius: var(--layars-border-radius-lg);
                    background-color: var(--layars-color-surface-default);
                }
                .tokens-typography {
                    font-family: var(--layars-font-family-default);

                    color: var(--layars-color-action-primary);
                }
                .tokens-buttons > * {
                    margin: 0 var(--layars-sizes-size-4);
                }
            </style>
            <div class="tokens-row">
                <h2 class="tokens-typography">
                    Hi Layars, I'm <get-theme-token path="font.family.default"></get-theme-token>!
                </h2>
                <div class="tokens-buttons">
                    <layars-button variant="solid" color="primary">Button</layars-button>
                    <layars-button variant="solid" color="primary">Button</layars-button>
                </div>
            </div>
        `,
        type: 'custom',
        scope: 'local',
        tokens: {
            custom: merge({}, tokens.light, {
                name: 'custom',
                color: {
                    surface_default: 'var(--layars-color-surface-gold-subdued)',
                    action_interactive: 'red',
                    action_interactive_hover: 'darkred',
                    action_interactive_pressed: 'lightsalmon',
                    action_interactive_subdued: 'lightsalmon',
                    action_interactive_subdued_hover: 'lightpink',
                    action_interactive_subdued_pressed: 'coral',
                    text_interactive: 'darkred',
                },
                font: {
                    family: {
                        default: '"Comic Sans MS"',
                    },
                },
            }),
        },
    },
    argTypes: {
        type: {
            options: ['light', 'dark', 'custom'],
            defaultValue: 'custom',
            control: {
                type: 'inline-radio',
            },
        },
    },
    parameters: {
        controls: {
            include: ['slot', 'type', 'tokens'],
        },
    },
}
