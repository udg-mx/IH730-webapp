
// eslint-disable-next-line no-undef
module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    // Advierte sobre variables declaradas pero no utilizadas
    "no-unused-vars": "warn",

    // Advierte sobre el uso de console.log() y métodos similares
    // "no-console": "warn",

    // Requiere el uso de === y !== en lugar de == y !=
    "eqeqeq": "error",

    // Sugiere usar 'const' para variables que nunca se reasignan
    "prefer-const": "warn",

    // Prohíbe el uso de 'var', prefiriendo 'let' o 'const'
    "no-var": "error",

    // Requiere punto y coma al final de las declaraciones
    "semi": ["error", "always"],

    // Requiere comas al final en objetos y arrays multilínea
    "comma-dangle": ["error", "always-multiline"],

    // Advierte sobre el uso de variables no definidas
    "no-undef": "error",
  },
};