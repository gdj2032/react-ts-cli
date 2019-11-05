const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('../custom');
const globals = require('./globals');

module.exports = {
  mode: 'production',
  output: {
    path: path.join(globals.RootDirectory, config.DLL.outputDir), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${config.DLL.outputDir}/[name]-manifest.json`,
      name: '[name]_library',
      context: globals.RootDirectory,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
};