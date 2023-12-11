import dedent from 'dedent-js'

/**
 * Serializes HTML for a Lit-Element web component snapshot.
 *
 * Forces snapshot into a consistent output.
 *
 * @param html - html to serialize into snapshot
 * @returns
 */
function serializeSnapshot(html?: string): string {
    return (
        // Dedent the HTML...
        dedent(html || '')
            // Remove all numbered attributes
            .replace(/ \d+=["'][^"']*["']/, '')
            // Remove all comments
            .replace(/<!--.*?-->/g, '')
    )
}

export { serializeSnapshot }

export default serializeSnapshot
