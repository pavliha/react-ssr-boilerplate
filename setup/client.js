import React from 'react'
import { hydrate } from 'react-dom'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import HotApp from './components/HotApp'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <WithTheme>
    <WithRedux>
      <BrowserRouter>
        <HotApp />
      </BrowserRouter>
    </WithRedux>
  </WithTheme>,
  document.getElementById('root')
)
