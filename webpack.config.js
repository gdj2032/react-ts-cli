const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolveTsconfigPathsToAlias = (tsconfigPath = path.resolve(process.cwd(), './tsconfig.json'), context) => {
  const { paths, baseUrl } = require(tsconfigPath).compilerOptions;
  console.log(paths, baseUrl)
  const aliases = {};
  const pathContext = context || baseUrl;

  Object.keys(paths).forEach((item) => {
    const key = item.replace('@/', '');
    const value = path.resolve(pathContext, paths[item][0].replace('@/', ''));

    aliases[key] = value;
  });

  return aliases;
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
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    // alias: resolveTsconfigPathsToAlias(),
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
