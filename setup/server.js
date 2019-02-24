import React from 'react'
import App from 'src/App'
import createLayout from './layout'

export default () => (request, response) => {

  const layout = createLayout({
    content: <App />,
  })

  response.send(layout)

}
