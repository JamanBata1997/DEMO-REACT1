/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'functional'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:functional/no-mutations',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/await-thenable': 'off',
        'no-var': 'error',
        'no-param-reassign': 'error',
        'prefer-const': 'error',
        '@typescript-eslint/no-misused-promises': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'functional/immutable-data': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'functional/no-let': 'off',
        'functional/prefer-readonly-type': 'off',
        quotes: [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
    },
}
