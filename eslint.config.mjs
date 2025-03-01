import jsdoc from 'eslint-plugin-jsdoc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const config = [
    // configuration included in plugin
    jsdoc.configs['flat/recommended'],
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            jsdoc,
        },
        rules: {
            'jsdoc/require-description': 'warn',
            'jsdoc/require-jsdoc': 'warn',
            'no-unused-vars': 'error',
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
    },
];

export default config;
