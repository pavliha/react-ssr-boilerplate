import React from 'react'
import { SheetsRegistry } from 'jss'
import { StaticRouter } from 'react-router-dom'
import store from 'src/redux/store'
import App from 'src/App'
import createLayout from './layout'
import withCodeSplitting from './utils/withCodeSplitting'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'

export default () => (request, response) => {
  const sheetsRegistry = new SheetsRegistry()
  const context = {}

  const [jsx, extractor] = withCodeSplitting(
    <WithTheme sheetsRegistry={sheetsRegistry}>
      <WithRedux>
        <StaticRouter context={context} location={request.url}>
          <App />
        </StaticRouter>
      </WithRedux>
    </WithTheme>
  )
  const layout = createLayout({
    content: jsx,
    state: store.getState(),
    extractor,
    sheetsRegistry,
  })

  response.send(layout)

}
