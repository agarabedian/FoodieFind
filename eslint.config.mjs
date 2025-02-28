import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import spellcheck from 'eslint-plugin-spellcheck';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ['**/*.html'],
    },
    ...fixupConfigRules(
        compat.extends('plugin:react/recommended', 'airbnb', 'eslint:recommended', 'plugin:import/typescript'),
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            '@typescript-eslint': typescriptEslint,
            jsdoc,
            spellcheck,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },

            parser: tsParser,
            ecmaVersion: 12,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            'max-len': [
                2,
                {
                    code: 130,
                },
            ],

            indent: ['error', 4],
            'no-alert': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-indent-props': ['error', 4],
            'implicit-arrow-linebreak': 0,
            'function-paren-newline': 0,
            'jsx-quotes': ['error', 'prefer-single'],
            'no-use-before-define': 'off',
            'linebreak-style': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',

            '@typescript-eslint/type-annotation-spacing': [
                'warn',
                {
                    after: true,
                },
            ],

            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            ],

            'react/jsx-one-expression-per-line': [
                0,
                {
                    allow: 'literal',
                },
            ],

            'react/destructuring-assignment': 0,

            'spellcheck/spell-checker': [
                1,
                {
                    skipWords: [
                        'jsdoc',
                        'unregister',
                        'localhost',
                        'ipv4',
                        'ipv6',
                        'href',
                        'onupdatefound',
                        'onstatechange',
                        'javascript',
                        'frontend',
                        'Mongodb',
                        'uri',
                        'mongod',
                        'Mui',
                        'unmount',
                        'unrendered',
                        'pathname',
                        'chickenshop',
                        'hotdogs',
                        'mexican',
                        'italian',
                        'american',
                        'noreferrer',
                    ],
                },
            ],

            'operator-linebreak': 0,
            'no-unused-vars': 0,
            'no-console': 0,
            'import/extensions': 0,
            'jsdoc/check-alignment': 1,
            'jsdoc/check-indentation': 1,
            'jsdoc/check-line-alignment': 1,
            'jsdoc/check-param-names': 1,
            'jsdoc/check-property-names': 1,
            'jsdoc/check-tag-names': 1,
            'jsdoc/check-types': 1,
            'jsdoc/check-values': 1,
            'jsdoc/empty-tags': 1,
            'jsdoc/multiline-blocks': 1,
            'jsdoc/newline-after-description': 1,
            'jsdoc/no-multi-asterisks': 1,
            'jsdoc/no-undefined-types': 1,
            'jsdoc/require-asterisk-prefix': 1,
            'jsdoc/require-description': 1,
            'jsdoc/require-description-complete-sentence': 1,

            'jsdoc/require-jsdoc': [
                1,
                {
                    require: {
                        FunctionExpression: true,
                        ClassDeclaration: true,
                        ArrowFunctionExpression: true,
                        ClassExpression: true,
                        MethodDefinition: true,
                    },

                    contexts: [
                        'TSInterfaceDeclaration',
                        'TSTypeAliasDeclaration',
                        'TSDeclareFunction',
                        'TSMethodSignature',
                        'TSPropertySignature',
                    ],
                },
            ],

            'jsdoc/require-param': 1,
            'jsdoc/require-param-description': 1,
            'jsdoc/require-param-name': 1,
            'jsdoc/require-param-type': 1,
            'jsdoc/require-property': 1,
            'jsdoc/require-property-description': 1,
            'jsdoc/require-property-name': 1,
            'jsdoc/require-property-type': 1,
            'jsdoc/require-returns': 1,
            'jsdoc/require-returns-check': 1,
            'jsdoc/require-returns-description': 1,
            'jsdoc/require-returns-type': 1,
            'jsdoc/valid-types': 1,
        },
    },
];
