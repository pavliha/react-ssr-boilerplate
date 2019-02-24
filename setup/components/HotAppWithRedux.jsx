import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import App from 'src/App'
import store from 'src/redux/store'

const HotAppWithRedux = () =>
  <Provider store={store}>
    <App />
  </Provider>

export default hot(HotAppWithRedux)
