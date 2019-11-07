const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackPreBuildPlugin = require('pre-build-webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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
                resources: './src/style/variable.scss'
            }
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': `${__dirname}/src/`,
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new WebpackPreBuildPlugin(function (stats) {
      console.log('WebpackPreBuildPlugin')
    }),
  ],
  devServer: {
    compress: true,
    port: 3001, // 启动端口为 3001 的服务
    open: true, // 自动打开浏览器
    proxy: {// 代理配置
      // '^/api/user/': { disabled: true, target: 'http://usercenter-gateway.yuna.svc.cluster.dev2:8800/' },
      // '^/api/application/': { target: 'http://usercenter-gateway.yuna.svc.cluster.dev2:8800/' },
       '^/api/': 'http://config-gateway.yuna.svc.cluster.dev2:8700/api/', //全局代理，放到最后
    },
    mock: './mock/index.js', // 指定mock文件，mock开启以后，如果/mock/index.js中配置了相关请求的mock，则返回mock数据，否则请求真实数据
  },
};
