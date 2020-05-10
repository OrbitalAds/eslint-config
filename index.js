module.exports = {
  globals: {
    MyGlobal: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    semi: ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "template-curly-spacing": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "none",
        requireLast: false
      },
      singleline: {
        delimiter: "comma",
        requireLast: false
      }
    }]
  }
}
