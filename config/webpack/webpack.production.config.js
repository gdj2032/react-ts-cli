const webpackMerge = require('webpack-merge');
const plugins = require('./plugins');
const commonConfig = require('./webpack.common.config.js');
const rules = require('./rules');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: './'
  },
  module: {
    rules: [
      rules.css(true),
    ]
  },
  plugins: plugins.proPlugins(),
});
