import React from 'react'
import { node } from 'prop-types'
import JssProvider from 'react-jss/lib/JssProvider'
import { SheetsRegistry } from 'jss'
import { createGenerateClassName, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import theme from 'config/theme'

class RemoveServerStyles extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { children } = this.props
    return children
  }
}

const AppWithTheme = ({ children }) => {
  const isServer = typeof window === 'undefined'
  const sheetsRegistry = isServer ? new SheetsRegistry() : undefined
  const sheetsManager = isServer ? new Map() : undefined

  return (
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={createGenerateClassName()}
    >
      <MuiThemeProvider
        theme={createMuiTheme(theme)}
        sheetsManager={sheetsManager}
      >
        {isServer ? children : <RemoveServerStyles>{children}</RemoveServerStyles>}
      </MuiThemeProvider>
    </JssProvider>
  )
}

AppWithTheme.propTypes = {
  children: node.isRequired,
}

export default AppWithTheme
