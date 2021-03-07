module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals:{
    'module':'readonly'
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    semi: ['warn', 'always'],
    indent: [2, 2],
    '@typescript-eslint/triple-slash-reference': [
      'warn',
      {
        path: 'always',
        types: 'always',
        lib: 'always'
      }
    ],
    camelcase: ["warn",{
      "properties": "always",
      "ignoreDestructuring": false
    }],
    "jsx-quotes":["error", "prefer-single"]
  },
};
