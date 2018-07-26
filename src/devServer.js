
const config = require('../config/webpack.config.dev')
const opn = require('opn')
const request = require('request')
require('colors')

let port = config.devServer.port
let host = 'localhost'
let uri = 'http://' + host + ':' + port

/*
   Use normal server to serve built files,
   webpack-dev-server for development
 */
if (process.env.NODE_ENV === 'production') {

  // not used

} else {

  const WebpackDevServer = require('webpack-dev-server')
  const webpack = require('webpack')
  config.entry.app.push(`webpack-dev-server/client?${uri}`)
  let compiler = webpack(config)
  let server = new WebpackDevServer(compiler, config.devServer)
  let openBrowser = JSON.parse(process.env.open || 'true')

  let _resolve
  let readyPromise = new Promise(resolve => _resolve = resolve)

  console.log('> Starting dev server...'.green)

  server.middleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri}`.green)
    if (openBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    _resolve()
  })

  server.listen(port)

  module.exports = {
    ready: readyPromise,
    close: () => server.close()
  }
}