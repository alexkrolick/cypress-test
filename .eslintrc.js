const prettierRc = require("./.prettierrc");

module.exports = {
  extends: [
    "react-app",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["cypress"],
  env: {
    "cypress/globals": true,
    "jest": true,
  }
};