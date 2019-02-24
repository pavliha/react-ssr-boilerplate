import React from 'react'
import { hydrate } from 'react-dom'
import AppWithTheme from './components/AppWithTheme'
import HotAppWithRedux from './components/HotAppWithRedux'

hydrate(
  <AppWithTheme>
    <HotAppWithRedux />
  </AppWithTheme>,
  document.getElementById('root')
)
