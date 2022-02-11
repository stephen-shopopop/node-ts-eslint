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
    "@typescript-eslint/quotes": ["error"],
    // [structure du code]: Cette règle vise à normaliser la façon dont les membres surchargés sont organisés.
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // [style]
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],
    // Favoriser l'usage de Record
    "@typescript-eslint/consistent-indexed-object-style": [
      "warn",
      "record"
    ],
    // Définitions des type pour les objets: favoriser les interfaces
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // Prise en charge des paramètres facultatifs: ils doivent être à la fin
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],
    // Types explicites sur les fonctions et les méthodes de classe
    "@typescript-eslint/explicit-function-return-type": "off",
    // Style: pas d'esapce sur fonction appelante 
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"],
    // Style: un espacement cohérent avant et après les mots-clés (utile pour try catch par exemple)
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error"],
    // Style: Ligne 
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error"],
    // Interdire les fonctions vide
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],
    // Pas d'importation en double
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],
    // Interdire l'affirmation non nulle supplémentaire.
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    // Interdire les parenthese inutile
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error"],
    // Interdire les point virgules inutile
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    // Interdire l'itération sur un tableau avec une boucle for-in
    "@typescript-eslint/no-for-in-array": "error"
  },
  overrides: [
    {
      "files": ["*.ts"],
      "rules": {
        // Types explicites sur les fonctions et les méthodes de classe
        "@typescript-eslint/explicit-function-return-type": ["error"],
      }
    }
  ],
  env : {
    "jest/globals": true
  },
  settings: {
    jest: {
      version: 27
    }
  }
};
