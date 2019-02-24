const path = require('path')
const merge = require('webpack-merge')
const config = require('../../webpack.config')
const Copy = require('copy-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const Loadable = require('@loadable/webpack-plugin')

module.exports = merge(config, {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './setup/client.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../build/public'),
    publicPath: '/',
    filename: `[name].[hash:3].js`,
  },

  plugins: [
    new Clean('./public', {
      root: path.resolve(__dirname, '../../build'),
    }),
    new Loadable({ writeToDisk: true }),
    new Copy([{ from: './src/assets', to: './' }]),
  ]
})
