#!/usr/bin/env node
import fs from 'node:fs/promises'
import { exit } from 'node:process'

import chalk from 'chalk'
import _ from 'lodash'
import flat from 'flat'
import { snakeCase } from 'change-case'

import { workspaces } from '@layars/root/utils/workspaces.js'

import tokens from '../input/design.tokens.json' assert { type: 'json' }

import { config } from './config.js'

const { flatten, unflatten } = flat

const workspace = workspaces['@layars/tokens']

function serializeTokens() {
    const nestedTokens = _.reduce(
        _.entries(tokens),
        (nestedTokens, [key, value]) => {
            nestedTokens[key] = value[key]

            return nestedTokens
        },
        {},
    )

    return _.map(config.artifacts, (artifact) => {
        const artifactTokens = _.get(nestedTokens, artifact.key)

        const files = _.map(_.entries(artifactTokens), ([key, values]) => {
            const name = `${key}.json`
            const inKey = `${artifact.key}.${key}`
            const outKey = inKey.replace(new RegExp(`\.(${artifact.theme})`), '')

            const flatTokens: Record<string, string | number | boolean> = flatten(values)

            const filteredTokens = _.filter(_.entries(flatTokens), ([key]) =>
                _.some(config.values, (val) => key.includes(val)),
            )

            const serializedFlatTokens = _.reduce(
                filteredTokens,
                (finalTokens, [key, value]) => {
                    if (value !== null) {
                        // Calculate the final key
                        const finalKey = `${outKey}.${key}`
                            // Split key into sections
                            .split('.')
                            // Snake case each section of key
                            .map((key) => snakeCase(key))
                            // Join back all sections of key
                            .join('.')

                        // Add flattened key path and value to accumulator
                        finalTokens[finalKey] = value
                    }

                    return finalTokens
                },
                {},
            )

            const content = unflatten(serializedFlatTokens, { object: true })

            return {
                name,
                content,
            }
        })

        return {
            ...artifact,
            files,
        }
    })
}

async function generateTokenFiles(serializedTokens) {
    let logs: string[][] = []

    await Promise.all(
        _.map(
            serializedTokens,
            async (tokenArtifact) =>
                await Promise.all(
                    _.map(tokenArtifact.files, async (tokenFile, index) => {
                        const log: string[] = (logs[index] = [])

                        log.push(`\n=> ${chalk.blue(`${tokenArtifact.out}/${tokenFile.name}`)}`)

                        try {
                            await fs.writeFile(
                                `${workspace.path}/tokens/${tokenArtifact.out}/${tokenFile.name}`,
                                JSON.stringify(tokenFile.content, null, 4),
                            )

                            log.push(` ${chalk.green(`(Success)`)}`)
                        } catch {
                            log.push(` ${chalk.red(`(Failure)`)}`)
                        }
                    }),
                ),
        ),
    )

    logs.forEach((log) => {
        process.stdout.write(log.join(''))
    })
}

async function main() {
    process.stdout.write(`\n${chalk.blue('Generating tokens...')}\n`)

    const serializedTokens = serializeTokens()

    await generateTokenFiles(serializedTokens)

    process.stdout.write(`\n\n${chalk.bold(chalk.green('Successfully generated tokens!'))}\n\n`)

    exit(0)
}

main()
