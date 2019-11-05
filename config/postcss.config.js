const postcssCssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssCssnext({}),
    cssnano({
      preset: 'default',
      autoprefixer: false,
      'postcss-zindex': false
    })
  ],
};
