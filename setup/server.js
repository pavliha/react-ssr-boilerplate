import React from 'react'
import { renderToString } from 'react-dom/server'
import App from 'src/App'
import createLayout from './layout'

export default () => (request, response) => {

  const layout = createLayout({
    content: <App />,
  })

  response.status(200).send(layout)
}
