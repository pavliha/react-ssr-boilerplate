const path = require('path')
const Css = require('mini-css-extract-plugin')

const Env = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, './src'),
      api: path.resolve(__dirname, './src/api'),
      config: path.resolve(__dirname, './config'),
      engines: path.resolve(__dirname, './src/redux/engines'),
      entities: path.resolve(__dirname, './src/redux/app/entities'),
      utils: path.resolve(__dirname, './src/utils'),
    }
  },

  context: __dirname,

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          Css.loader,
          'css-loader',
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'react-icon-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name() {
                return '[path][name].[ext]'
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [

    new Env({ safe: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new Css({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}
