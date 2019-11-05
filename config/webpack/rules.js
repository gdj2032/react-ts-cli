const path = require('path');
const globals = require('./globals');

exports.js = {
  test: /\.(j|t)sx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        comments: false,
        babelrc: false,
        presets: [
          [
            require.resolve("@babel/preset-env"),
            { targets: { browsers: "last 2 versions" } } // or whatever your project requires
          ],
          require.resolve("@babel/preset-typescript"),
          require.resolve("@babel/preset-react")
        ],
        plugins: [
          [require.resolve("@babel/plugin-transform-runtime"), { "regenerator": true }],
          [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
          [require.resolve("@babel/plugin-proposal-class-properties"), { loose: true }],
          [require.resolve("babel-plugin-import"), { libraryName: "antd", libraryDirectory: "lib", style: "css"}],
        ],
      }
    }
  ],
  include: globals.SourceDirectory,
};

exports.css = (extract = false) => {
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      config: {
        path: path.resolve(__dirname, 'config')
      }
    }
  };
  return {
    test: /\.(css|scss)$/,
    use: extract ? globals.assistExtract.extract({
      fallback: 'style-loader',
      use: ['css-loader', postcssLoader, 'sass-loader']
    }) : ['style-loader', 'css-loader', postcssLoader, 'sass-loader']
  }
};

exports.fonts = {
  test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
  use: 'file-loader',
};

exports.assets = {
  test: /\.(jpe?g|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: { limit: 10240 },
  },
};

exports.svg = {
  test: /\.(svg)$/i,
  use: 'svg-sprite-loader',
  include: [
    globals.SvgDirectory,
  ],
};
