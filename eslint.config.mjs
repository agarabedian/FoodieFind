import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            jsdoc,
        },
        languageOptions: { globals: globals.browser },
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-indentation': 'error',
            'jsdoc/require-description-complete-sentence': 'error',
            'jsdoc/require-jsdoc': [
                'error',
                {
                    require: {
                        FunctionDeclaration: true,
                        MethodDefinition: true,
                        ClassDeclaration: true,
                        ArrowFunctionExpression: true,
                        FunctionExpression: true,
                    },
                },
            ],
            'jsdoc/require-param': 'error',
            'jsx-quotes': ['error', 'prefer-single'],
            'max-len': [2, { code: 130 }],
            indent: ['error', 4],
            'no-alert': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-indent-props': ['error', 4],
            'implicit-arrow-linebreak': 0,
            'function-paren-newline': 0,
            'no-use-before-define': 'off',
            'linebreak-style': 'off',
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
            'react/jsx-one-expression-per-line': [0, { allow: 'literal' }],
            'react/destructuring-assignment': 0,
            // '@typescript-eslint/no-use-before-define': 'off',
            // '@typescript-eslint/no-unused-vars': 'warn',
            // '@typescript-eslint/type-annotation-spacing': ['warn', { after: true }],
        },
    },
];
