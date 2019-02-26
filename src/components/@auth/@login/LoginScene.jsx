import React from 'react'
import { object } from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'
import LoginForm from './LoginForm'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    padding: '20px 20px 0  20px',
  },
}

const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    <Card className={classes.card}>
      <Typography color="textSecondary">Login</Typography>
      <LoginForm />
    </Card>
  </div>

LoginScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LoginScene)
