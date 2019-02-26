import React from 'react'
import { hydrate } from 'react-dom'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import App from 'src/App'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <WithTheme>
    <WithRedux>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WithRedux>
  </WithTheme>,
  document.getElementById('root')
)
