/** @type {import("prettier").Config} */
const config = {
  bracketSameLine: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config
