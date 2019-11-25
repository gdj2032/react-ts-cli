const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackPreBuildPlugin = require('pre-build-webpack');
const webpack = require('webpack');

let onPrebuild
try {
  onPrebuild = require('./.preBuild.js'); }
catch (e) {
  console.error('无法加载编译前置处理文件： .preBuild.js');
  console.error(e);
  throw e;
}

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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        exclude: path.resolve(__dirname, "./src/images/svg"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              outputPath: "font",
              publicPath: "font"
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: path.resolve(__dirname, "./src/images/svg"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        options: {
          symbolId: "icon-[name]" //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
        }
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new WebpackPreBuildPlugin(function (stats) {
      onPrebuild && onPrebuild(stats)
    }),
  ],
  devServer: {
    compress: true,
    port: 9001, // 启动端口为 9001 的服务
    open: true, // 自动打开浏览器
    hot: true,
    host: '0.0.0.0',
    proxy: {// 代理配置
      '/mock/*': {
        target: 'http://192.168.1.179:3721',
        changeOrigin: true,
      },
      '/api/*': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
};
