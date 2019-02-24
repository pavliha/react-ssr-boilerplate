const path = require('path')
const merge = require('webpack-merge')
const config = require('../../webpack.config')

module.exports = merge(config, {
  name: 'server',
  target: 'node',
  entry: './setup/server',
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
})
