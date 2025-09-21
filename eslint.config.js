import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

/** @type {import('eslint').Linter.Config[]} */
export default [
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.strict,
    ...ts.configs.recommended,
    ...ts.configs.stylistic,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
    {
        files: ['**/*.svelte'],

        languageOptions: {
            parserOptions: {
                parser: ts.parser,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
        },
    },
    {
        ignores: ['src/lib/component-types-storyblok.d.ts'],
    },
];
