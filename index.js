const { config } = require('dotenv')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const universalConfig = require('./config/universal.js')
const setup = require('./config/setup')
const app = express()

config()

const compiler = webpack(universalConfig)

const clientCompiler = compiler.compilers.find(compiler => compiler.name === 'client')

app.use(webpackDevMiddleware(compiler,       setup.webpackDevMiddleware))
app.use(webpackHotMiddleware(clientCompiler, setup.webpackHotMiddleware))
app.use(webpackHotServerMiddleware(compiler, setup.webpackHotServerMiddleware))

app.listen(process.env.PORT, () => {
  console.log(`Server started: http://localhost:${process.env.PORT}/`)
})
