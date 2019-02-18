import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScene from './@login/LoginScene'
import RegisterScene from './@register/RegisterScene'
import LandingHeader from '../LandingHeader'
import AuthDevider from './AndDevider'
import SocialLogin from './SocialLogin'

const styles = () => ({
  root: {
    height: '100%',
    background: 'rgb(0,0,0,0.2)',
  },
  container: {
    maxWidth: 400,
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scene: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
})

class AuthLayout extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <LandingHeader />

        <div className={classes.container}>
          <div className={classes.scene}>
            <div>
              <Switch>
                <Route exact path="/auth/register" component={RegisterScene} />
                <Route exact path="/auth/login" component={LoginScene} />
                <Redirect to="/auth/login" />
              </Switch>
            </div>

            <AuthDevider />

            <SocialLogin />
          </div>
        </div>
      </div>
    )
  }
}

AuthLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AuthLayout)