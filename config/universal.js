const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../webpack.config')


const dist = path.join(__dirname, '../build')


/**
 * Universal webpack config for both client and server
 */

module.exports = [

  /**
   * Webpack development config for client
   */
  merge(config, {
    name: 'client',
    target: 'web',
    entry: {
      client: [
        '@babel/polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './setup/client.js',
      ],
    },
    output: {
      path: dist,
      filename: 'client.js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }),

  /**
   * Webpack development config for node server
   */
  merge(config, {
    name: 'server',
    target: 'node',
    entry: './setup/server',
    output: {
      path: dist,
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
  })
]
