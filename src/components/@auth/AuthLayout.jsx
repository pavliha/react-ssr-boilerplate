import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import LoginScene from './@login/LoginScene'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
}

const AuthLayout = ({ classes }) =>
  <div className={classes.root}>
    <Switch>
      <Route exact path="/auth/login" component={LoginScene} />
    </Switch>
  </div>

AuthLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AuthLayout)
