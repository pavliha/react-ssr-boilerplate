import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

export default ({ clientStats, serverStats, foo }) => (req, res) => {
  res.status(200).send(`
    <!doctype html>
    <html>
    <head>
        <title>${foo}</title>
    </head>
    <body>
        <div id="root">${renderToString(React.createElement(App))}</div>
        <script src="/client.js"></script>
    </body>
    </html>
  `)
}
