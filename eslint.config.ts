// Copyright © 2025 JalapenoLabs

// This is the recommended ESLint configuration
// Based on rules and experience from the Google typescript style guide
// https://google.github.io/styleguide/tsguide.html#exports

import type { ConfigWithExtends } from '@eslint/config-helpers'

// Core
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

// Compatibility
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

// Plugins
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import reactRefresh from 'eslint-plugin-react-refresh'
import i18Next from 'eslint-plugin-i18next'
// @ts-ignore
import licenseHeader from 'eslint-plugin-license-header'


import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const baseDirectory = dirname(
  fileURLToPath(import.meta.url),
)

const compat = new FlatCompat({
  baseDirectory,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})


const baseConfig: ConfigWithExtends = {
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parser: tseslint.parser,
  },

  files: [ '**/*.{ts,js,cjs}' ],

  plugins: {
    '@stylistic': stylistic,
    'import': importPlugin,
    'i18next': i18Next,
    'license-header': licenseHeader,
    '@typescript-eslint': tseslint.plugin,
  },

  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // ///////////////////////////////////// //
    //     Google 2015 Typescript Guide      //
    // ///////////////////////////////////// //

    // https://github.com/google/eslint-config-google/blob/main/index.js

    'no-cond-assign': 'off',
    'no-irregular-whitespace': 'error',
    'no-unexpected-multiline': 'error',
    'curly': [ 'error', 'multi-line' ],
    // 'guard-for-in': 'error', // <-- Manually turning off
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    // 'no-unused-vars': ['error', {args: 'none'}], // <-- Turning off in favor of @typescript-eslint/no-unused-vars
    'array-bracket-newline': 'off',
    // 'array-bracket-spacing': ['error', 'never'], // <-- Manually turning off
    'array-element-newline': 'off',
    'block-spacing': [ 'error', 'never' ],
    // 'brace-style': 'error', // <-- Manually turning off
    'camelcase': [ 'error', { properties: 'never' }],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'indent': 'off',
    'key-spacing': 'error',
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
    }],
    'linebreak-style': 'error',
    // 'max-len': ['error', {
    //   code: 80,
    //   tabWidth: 2,
    //   ignoreUrls: true,
    //   ignorePattern: 'goog\.(module|require)',
    // }], // <-- Manually turning off
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 2 }],
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    // 'object-curly-spacing': 'error', // <-- Manually turning off
    'one-var': [ 'error', {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    // 'operator-linebreak': ['error', 'after'], // <-- Manually turning off
    'padded-blocks': [ 'error', 'never' ], 'quote-props': [ 'error', 'consistent' ],
    'quotes': [ 'error', 'single', { allowTemplateLiterals: true }],
    'semi': [ 'error', 'never' ],
    'semi-spacing': 'error', 'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    'spaced-comment': [ 'error', 'always' ],
    'switch-colon-spacing': 'error',
    'arrow-parens': [ 'error', 'always' ],
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', 'after' ],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'prefer-const': [ 'error', { destructuring: 'all' }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': 'error',
    'yield-star-spacing': [ 'error', 'after' ],

    // ///////////////////////////////////// //
    //            My Preferences             //
    // ///////////////////////////////////// //

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'consistent-return': 'error',
    'import/no-extraneous-dependencies': 'off',
    'guard-for-in': 'off',
    'no-useless-return': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    'no-useless-escape': 'error',
    'yoda': 'error',
    'operator-linebreak': [ 'error', 'before' ],

    'brace-style': [ 'error', 'stroustrup', {
      'allowSingleLine': false,
    }],

    '@stylistic/eol-last': [ 'error', 'always' ],

    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }],

    'object-curly-spacing': [ 'error', 'always', {
      objectsInObjects: false,
      arraysInObjects: false,
    }],

    'import/no-default-export': 'error',

    'no-restricted-exports': [ 'error', {
      restrictedNamedExports: [ 'default' ],
    }],

    'require-jsdoc': 'off',

    'max-len': [ 'error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
    }],

    'license-header/header': [
      'error',
      [
        `// Copyright © ${new Date().getFullYear()} JalapenoLabs`,
      ],
    ],
  },
}

export default defineConfig([
  globalIgnores([
    // Third party:
    '**/node_modules',
    // Build outputs:
    '**/dist',
    '**/build',
    '**/out',
  ]),

  // Base configuration for JS, TS, and CJS files (non-React)
  baseConfig,


  // React configuration (merged into a single TSX-targeted config)
  (() => {
    const compatConfigs = compat.extends(
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    )

    // Merge compat configs into one to avoid plugin redefinition
    const merged = compatConfigs.reduce((acc, cfg) => ({
      // combine simple objects
      rules: { ...(acc.rules ?? {}), ...(cfg.rules ?? {}) },
      settings: { ...(acc.settings ?? {}), ...(cfg.settings ?? {}) },
      plugins: { ...(acc.plugins ?? {}), ...(cfg.plugins ?? {}) },
    }), {} as any)

    const fixed = fixupConfigRules(merged as any) as any

    return {
      files: [ '**/*.{tsx,jsx}' ],
      languageOptions: baseConfig.languageOptions,
      plugins: {
        ...baseConfig.plugins,
        ...fixed.plugins,
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      settings: {
        ...baseConfig.settings,
        ...fixed.settings,
        react: { version: 'detect' },
      },
      rules: {
        ...baseConfig.rules,
        ...fixed.rules,
        // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'jsx-quotes': [ 'error', 'prefer-single' ],
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    }
  })(),

  // Test files override
  {
    files: [ '**/__test__/**/*.{js,ts,jsx,tsx}', '**/*.{test,spec}.{js,ts,jsx,tsx}' ],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'i18next/no-literal-string': 'off',
    },
  },

  // Config files override
  {
    files: [ '**/*.config.{cjs,js,ts}' ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-default-export': 'off',
      'no-undef': 'off',
    },
  },

  // Declaration files override
  {
    files: [ '**/*.d.ts' ],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'spaced-comment': 'off',
    },
  },
])
