const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('../custom');
const globals = require('./globals');

const commonPlugin = Object.keys(config.DLL.entry || {}).map(dllEntry => {
  return new webpack.DllReferencePlugin({
    context: globals.RootDirectory,
    manifest: `${config.DLL.outputDir}/${dllEntry}-manifest.json`
  });
});

exports.devPlugins = function () {
  return commonPlugin.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.BUILD_ENV': JSON.stringify(config.DEVELOPMENT.BUILD_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(globals.RootDirectory, 'index.html'),
      inject: true
    }),
  ]);
};

const copyResource = config.PRODUCTION.copy.map(dir => {
  return {
    from: path.resolve(globals.RootDirectory, dir),
    to: path.resolve(globals.DistDirectory, dir),
    ignore: ['.*']
  };
});

exports.proPlugins = function () {
  return commonPlugin.concat([
    globals.assistExtract,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BUILD_ENV': JSON.stringify(config.PRODUCTION.BUILD_ENV),
    }),
    new HtmlWebpackPlugin({ 
      filename: path.resolve(globals.DistDirectory, 'index.html'),
      template: path.resolve(globals.RootDirectory, 'index.html'),
      inject: true,
      chunksSortMode: 'dependency',
    }),
    new CopyWebpackPlugin(copyResource),
  ], config.PRODUCTION.BundleAnalyzer ? [new BundleAnalyzerPlugin()] : [])
};

exports.optimization = function() {
  return {
    minimizer: [
      new UglifyJsPlugin()
    ]
  };
};
