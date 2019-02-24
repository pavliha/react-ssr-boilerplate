import React from 'react'
import { renderToString } from 'react-dom/server'

export default ({ content }) =>
  `
    <!doctype html>
    <html lang="ru">
    <head>
        <title>react ssr boilerplate</title>
    </head>
    <body>
        <div id="root">${renderToString(content)}</div>
        <script src="/client.js"></script>
    </body>
    </html>
  `

