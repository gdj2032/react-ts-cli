
const webpackMerge = require('webpack-merge');
const plugins = require('./plugins');
const commonConfig = require('./webpack.common.config.js');
const rules = require('./rules');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  module: {
    rules: [
      rules.css(),
    ]
  },
  plugins: plugins.devPlugins(),
  devtool: 'cheap-module-eval-source-map',
});
