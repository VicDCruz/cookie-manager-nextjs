module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-underscore-dangle': 0,
    'arrow-body-style': 1,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-console': 1,
    'no-case-declarations': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-parens': 0,
    'prettier/prettier': [
      'error',
      { singleQuote: true, parser: 'flow', arrowParens: 'avoid' },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
};
