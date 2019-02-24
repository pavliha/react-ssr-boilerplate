import React from 'react'
import { renderToString } from 'react-dom/server'
import AppWithTheme from './components/AppWithTheme'
import createLayout from './layout'
import HotAppWithRedux from './components/HotAppWithRedux'

export default () => (request, response) => {

  const layout = createLayout({
    content: <AppWithTheme><HotAppWithRedux /></AppWithTheme>,
  })

  response.status(200).send(layout)
}
