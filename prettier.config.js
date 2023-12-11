// Layars Monorepo Base Prettier Config
// @link https://prettier.io/docs/en/options.html
/** @type {import("prettier").Options} */
export default {
    // Specify the line length that the printer will wrap on.
    // @link https://prettier.io/docs/en/options.html#print-width
    printWidth: 100,

    // Specify the number of spaces per indentation-level.
    // @link https://prettier.io/docs/en/options.html#tab-width
    tabWidth: 4, // Tabs are 4 spaces.

    // Indent lines with tabs instead of spaces.
    // @link https://prettier.io/docs/en/options.html#tabs
    useTabs: false, // Don't indent lines with tabs.

    // Print semicolons at the ends of statements.
    // @link https://prettier.io/docs/en/options.html#semicolons
    semi: false, // Only add semicolons at the beginning of lines that may introduce ASI failures.

    // Use single quotes instead of double quotes.
    // @link https://prettier.io/docs/en/options.html#quotes
    singleQuote: true, // Use single quotes.

    // Change when properties in objects are quoted.
    // @link https://prettier.io/docs/en/options.html#quote-props
    quoteProps: 'consistent', // If at least one property in an object requires quotes, quote all properties.

    // Use single quotes instead of double quotes in JSX.
    // @link https://prettier.io/docs/en/options.html#jsx-quotes
    jsxSingleQuote: false, // Use double quotes.

    // Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
    // @link https://prettier.io/docs/en/options.html#trailing-commas
    trailingComma: 'es5', // Trailing commas wherever possible (including function parameters and calls).

    // Print spaces between brackets in object literals.
    // @link https://prettier.io/docs/en/options.html#bracket-spacing
    bracketSpacing: true, // Apply spaces between brackets.

    // Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the
    // last line instead of being alone on the next line (does not apply to self closing elements).
    // @link https://prettier.io/docs/en/options.html#bracket-line
    bracketSameLine: false, // Apply `>` in a new line.

    // Include parentheses around a sole arrow function parameter.
    // @link https://prettier.io/docs/en/options.html#arrow-function-parentheses
    arrowParens: 'always', // Always include parens.

    // Format only a segment of a file.
    // These two options can be used to format code starting and ending at a given character offset
    // (inclusive and exclusive, respectively).
    // @link https://prettier.io/docs/en/options.html#range
    rangeStart: 0, // Start of the file
    rangeEnd: Infinity, // End of the file

    // By default, Prettier will not change wrapping in markdown text since some services use a
    // linebreak-sensitive renderer, e.g. GitHub comments and BitBucket.
    // @link https://prettier.io/docs/en/options.html#prose-wrap
    proseWrap: 'preserve', // Do nothing, leave prose as-is.

    // Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.
    // @link https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
    htmlWhitespaceSensitivity: 'css', // Respect the default value of CSS display property.

    // Whether or not to indent the code inside` <script>` and `<style>` tags in Vue files.
    // @link https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
    vueIndentScriptAndStyle: false, // Do not indent script and style tags in Vue files.

    // All modern text editors in all operating systems are able to correctly display line
    // endings when `\n` (`LF`) is used.
    // @link https://prettier.io/docs/en/options.html#end-of-line
    endOfLine: 'lf', // Line Feed only (`\n`), common on Linux and macOS as well as inside git repos.

    // Control whether Prettier formats quoted code embedded in the file.
    // @link https://prettier.io/docs/en/options.html#embedded-language-formatting
    embeddedLanguageFormatting: 'auto', // Format embedded code if Prettier can automatically identify it.

    // Enforce single attribute per line in HTML, Vue and JSX.
    // @link https://prettier.io/docs/en/options.html#single-attribute-per-line
    singleAttributePerLine: true, // Enforce single attribute per line.
}
