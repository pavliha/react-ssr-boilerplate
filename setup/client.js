import React from 'react'
import { hydrate } from 'react-dom'
import WithTheme from './components/WithTheme'
import WithRedux from './components/WithRedux'
import HotApp from './components/HotApp'

hydrate(
  <WithTheme>
    <WithRedux>
      <HotApp />
    </WithRedux>
  </WithTheme>,
  document.getElementById('root')
)
