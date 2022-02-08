module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended"
  ],
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "quotes": "off",
    "@typescript-eslint/quotes": ["error"]
  }
};
