module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "@stephen-shopopop/eslint-config",
    "plugin:jest/recommended",
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
};
