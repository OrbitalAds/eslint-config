module.exports = {
  globals: {
    MyGlobal: true
  },
  parser: "@typescript-eslint/parser",
  extends: [ "plugin:react/recommended" ],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  rules: {
    "eol-last": ["error", "always"],
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "react/prop-types": 0,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "react/no-unescaped-entities": "off",
    "keyword-spacing": ["error", { "before": true }],
    "template-curly-spacing": ["error", "never"],
    "quotes": [2, "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-curly-spacing": [2, { "when": "never", "allowMultiline": false }],
    "comma-dangle": ["error", "never"],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "ignore",
      "prop": "ignore"
    }]
  }
}
