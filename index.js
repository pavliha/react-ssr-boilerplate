const { config } = require('dotenv')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const universalConfig = require('./config/webpack/universal.js')
const setup = require('./config/setup')
const app = express()

config()

switch (process.env.NODE_ENV) {

  case 'development': {
    const compiler = webpack(universalConfig)

    const clientCompiler = compiler.compilers.find(compiler => compiler.name === 'client')

    app.use(webpackDevMiddleware(compiler, setup.webpackDevMiddleware))
    app.use(webpackHotMiddleware(clientCompiler, setup.webpackHotMiddleware))
    app.use(webpackHotServerMiddleware(compiler, setup.webpackHotServerMiddleware))

    break
  }

  case 'production': {
    const client = path.resolve(__dirname, '../build/public')
    const serverPath = path.resolve(__dirname, './build/server.js')

    const serverRenderer = require(serverPath).default

    app.use(express.static(client))
    app.use(serverRenderer())
  }

}

app.listen(process.env.PORT, () => {
  console.log(`Server started: http://localhost:${process.env.PORT}/`)
})
