import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Helmet } from 'react-helmet'

const styles = {
  root: {},
}

const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Вход в аккаунт - Partymaker</title>
    </Helmet>
    Login Scene
  </div>
LoginScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LoginScene)
