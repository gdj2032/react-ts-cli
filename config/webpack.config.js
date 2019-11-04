const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共配置
const HtmlWebPackPlugin = require('html-webpack-plugin');

const devConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader')
          },
          {
            loader: require.resolve('css-loader')
          },
          require.resolve('sass-loader'),
          {
            loader: require.resolve('sass-resources-loader'),
            options: {
                resources: '../src/style/variable.scss'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 3001, // 启动端口为 3001 的服务
    open: true // 自动打开浏览器
  },
};
module.exports = merge(devConfig, baseConfig); // 将baseConfig和devConfig合并为一个配置
