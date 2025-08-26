// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import i18next from 'eslint-plugin-i18next';

export default [js.configs.recommended, i18next.configs['flat/recommended'], {
  files: ["src/**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json"
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
      __IS_DEV__: "readonly"
    }
  },
  plugins: {
    react: reactPlugin,
    "@typescript-eslint": tsPlugin
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...tsPlugin.configs.recommended.rules,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-trailing-spaces": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}, ...storybook.configs["flat/recommended"]];