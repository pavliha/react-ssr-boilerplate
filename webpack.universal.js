const path = require('path')
const webpack = require('webpack')
const dist = path.join(__dirname, 'dist')
const merge = require('webpack-merge')
const config = require('./webpack.config')

module.exports = [

  merge(config, {
    name: 'client',
    target: 'web',
    entry: {
      client: [
        '@babel/polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index.js',
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
