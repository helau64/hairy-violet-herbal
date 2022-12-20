module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-easy-import': {},
    'postcss-advanced-variables': {},
    'postcss-atroot': {},
    'postcss-map-get': {},
    'postcss-property-lookup': {},
    'postcss-rem': {baseline: 20},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  },
};
