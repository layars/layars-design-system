/* eslint-disable prettier/prettier */

// Rule overrides heavily based off of
// @link https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

// Extends
import js from '@eslint/js'

// Parser
import typescriptEslintParser from '@typescript-eslint/parser/dist/parser.js'

// Plugins
import prettierPlugin from 'eslint-plugin-prettier'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
// import importPlugin from 'eslint-plugin-import/lib/index.js'

// Rules
import prettierConfig from './prettier.config.cjs'

// @link https://eslint.org/docs/latest/use/configure/
export default [
    // `eslint` recommended as a base
    // @link https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
    {
        // extends: 'eslint:recommended'
        ...js.configs.recommended,
    },

    // `eslint-plugin-prettier` for prettier integration
    // Disables problematic rules from above for automated prettier formatting
    // @link https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js
    {
        // extends: 'plugin:prettier/recommended'
        rules: prettierPlugin.configs.recommended.rules,
    },

    // `@typescript-eslint/recommended` plugin for typescript parsing and typescript rules
    // @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
    {
        // extends: 'plugin:@typescript-eslint/recommended'
        rules: typescriptPlugin.configs.recommended.rules,
    },

    // `eslint-plugin-import` recommended rules
    // @link https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
    {
        // extends: 'plugin:import/recommended'
        // rules: importPlugin.configs.recommended.rules,
    },

    // `eslint-plugin-import` typescript related rules
    // @link https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
    {
        // extends: 'plugin:import/typescript'
        // rules: importPlugin.configs.typescript.rules,
    },

    // `eslint-plugin-react` for react and jsx rules
    // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
    {
        // extends: 'plugin:react/recommended'
        rules: reactPlugin.configs.recommended.rules,
    },

    // Layars Design System
    {
        languageOptions: {
            // The version of ECMAScript to support.
            ecmaVersion: 'latest',

            // The type of JavaScript source code.
            // - "script" for traditional script files
            // - "module" for ECMAScript modules (ESM)
            // - "commonjs" for CommonJS files.
            sourceType: 'module',

            // An object specifying additional objects that should be added to the global scope
            // during linting.
            globals: {
                module: 'readonly'
            },

            // An object containing a parse() method or a parseForESLint() method.
            parser: typescriptEslintParser, // TypeScript parser

            // An object specifying additional options that are passed directly to the parse()
            // or parseForESLint() method on the parser.
            parserOptions: {},
        },

        // @link https://eslint.org/docs/latest/use/configure/plugins
        plugins: {
            // `@typescript-eslint` plugin for typescript rules
            '@typescript-eslint': typescriptPlugin,

            // 'import' plugin for import rules
            // 'import': importPlugin,

            // `react` plugin for react rules
            'react': reactPlugin,

            // Use `eslint-plugin-prettier` for prettier integration formatting
            'prettier': prettierPlugin,
        },

        // @link https://eslint.org/docs/latest/use/configure/rules
        rules: {
            // General Rules

            // Enable prettier rule to run prettier from within eslint
            // @link https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
            'prettier/prettier': [
                'error',
                {
                    ...prettierConfig,
                },
            ],

            // Don't use semi colons unless needed
            // @link https://eslint.org/docs/rules/semi
            'semi': ['error', 'never'],
            '@typescript-eslint/semi': ['error', 'never'],

            // Enforce or disallow capitalization of the first letter of a comment
            // @link https://eslint.org/docs/rules/capitalized-comments
            'capitalized-comments': [
                'off',
                'never',
                {
                    line: {
                        ignorePattern: '.*',
                        ignoreInlineComments: true,
                        ignoreConsecutiveComments: true,
                    },
                    block: {
                        ignorePattern: '.*',
                        ignoreInlineComments: true,
                        ignoreConsecutiveComments: true,
                    },
                },
            ],

            // No preference on arrow callbacks vs. function expressions
            // In some cases, the function expression is better (like as a functional component)
            // to include the name in a `forwardRef`
            // In other cases, the arrow callback can make sense to make sure scope is defined
            // in a correct order
            // @link https://eslint.org/docs/rules/prefer-arrow-callback
            'prefer-arrow-callback': 'off',

            // Specify the maximum depth that blocks can be nested
            // @link https://eslint.org/docs/rules/max-depth
            'max-depth': ['off', 4],

            // Specify the maximum length of a line in your program
            // @link https://eslint.org/docs/rules/max-len
            'max-len': [
                'error',
                100,
                2,
                {
                    ignoreUrls: true,
                    ignoreComments: false,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                },
            ],

            // Require line breaks inside function parentheses if there are line breaks
            // between parameters
            // Function parenthesis on newline makes the `ref` show up easier
            // in `forwardRef` components
            // @link https://eslint.org/docs/rules/function-paren-newline
            'function-paren-newline': ['error', 'multiline-arguments'],

            // Allow nested ternary expressions
            // @link https://eslint.org/docs/rules/no-nested-ternary
            'no-nested-ternary': 'off',

            // Stylistic opinion
            // @link https://eslint.org/docs/rules/no-nested-ternary
            'arrow-body-style': 'off',

            // Allow non-null assertions
            // @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
            '@typescript-eslint/no-non-null-assertion': 'off',

            // Allow empty interfaces
            // @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
            '@typescript-eslint/no-empty-interface': 'off',

            // Disallow certain syntax forms
            // @link https://eslint.org/docs/rules/no-restricted-syntax
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'ForInStatement',
                    message:
                        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                },
                {
                    selector: 'ForOfStatement',
                    message:
                        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
                },
                {
                    selector: 'LabeledStatement',
                    message:
                        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                },
                {
                    selector: 'WithStatement',
                    message:
                        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                },
                {
                    message:
                        "Do not import default or named exports from React. Use a namespace import (import * as React from 'react';) instead.",
                    selector:
                        'ImportDeclaration[source.value="react"] ImportDefaultSpecifier, ImportDeclaration[source.value="react"] ImportSpecifier',
                },
                {
                    message:
                        "Do not import default or named exports from ReactDOM. Use a namespace import (import * as ReactDOM from 'react-dom';) instead.",
                    selector:
                        'ImportDeclaration[source.value="react-dom"] ImportDefaultSpecifier, ImportDeclaration[source.value="react-dom"] ImportSpecifier',
                },
                {
                    message:
                        "Do not import default or named exports from ReactDOM. Use a namespace import (import * as ReactDOM from 'react-dom/client';) instead.",
                    selector:
                        'ImportDeclaration[source.value="react-dom/client"] ImportDefaultSpecifier, ImportDeclaration[source.value="react-dom/client"] ImportSpecifier',
                },
                {
                    message:
                        "Do not import default or named exports from ReactDOMServer. Use a namespace import (import * as ReactDOM from 'react-dom/server';) instead.",
                    selector:
                        'ImportDeclaration[source.value="react-dom/server"] ImportDefaultSpecifier, ImportDeclaration[source.value="react-dom/server"] ImportSpecifier',
                },
            ],

            // React Rules

            // Prop spreading is hugely beneficial for extending components in a library
            // We are a library, not an application
            // Would definitely support this in an application environment
            // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
            'react/jsx-props-no-spreading': 'off',

            // Requiring destructuring? No thanks
            // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
            'react/destructuring-assignment': 'off',

            // Prop types are defined by TS interfaces instead of using prop-types
            // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
            'react/prop-types': 'off',

            // We convert types to prop-types
            // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
            'react/require-default-props': 'off',

            // The default is to use an array of indexed keys
            // @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
            'react/no-array-index-key': 'off',
        },
    },
]
