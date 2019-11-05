const path = require('path');
const globals = require('./globals');
const rules = require('./rules');
const { resolveTsconfigPathsToAlias } = require('../../utils');

module.exports = {
  resolve: {
    modules: [
      globals.SourceDirectory,
      globals.NodeModulesDirectory
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: resolveTsconfigPathsToAlias(
      path.resolve(globals.RootDirectory, './tsconfig.json'), 
      globals.SourceDirectory
    )
  },
  output: {
    path: globals.DistDirectory,
    filename: '[name]-[hash:8].js',
    chunkFilename: 'chunk-[hash:8].js',
    publicPath: ''
  },
  context: __dirname,
  entry: {
    bundle: [path.resolve(globals.SourceDirectory, 'index.tsx')],
  },
  module: {
    rules: [
      rules.js,
      rules.fonts,
      rules.assets,
      rules.svg
    ]
  },
  plugins: [],
};

