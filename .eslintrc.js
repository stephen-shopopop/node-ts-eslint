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
    "@typescript-eslint/no-for-in-array": "error",
    // Interdire les déclarations de fonction qui contiennent des références non sécurisées à l'intérieur des instructions de boucle
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    // Appliquer une définition valide de newet constructor.
    "@typescript-eslint/no-misused-new": "error",
    // Interdit l'utilisation d'une assertion non nulle après une expression de chaîne facultative.
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    // Interdit les assertions non nulles à l'aide de l' !opérateur postfixé
    "@typescript-eslint/no-non-null-assertion": "warn",
    // Interdire la redéclaration des variables
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    // Interdire les nombres littéraux qui perdent de la précision
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": ["error"],
    // Interdire les déclarations de variables des variables fantômes déclarées dans la portée externe
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // Interdit les contraintes inutiles sur les types génériques
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    // Interdire les variables inutilisées
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    // Interdire l'utilisation de variables avant qu'elles ne soient définies
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    // Interdire les constructeurs inutiles.
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    // Interdit l'utilisation d'instructions require sauf dans les instructions d'importation: import foo = require("foo")
    "@typescript-eslint/no-var-requires": "error",
    // Prefer const literal
    "@typescript-eslint/prefer-as-const": "error",
    // Espacement sur objet
    "object-curly-spacing": ["error", "always"]
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
