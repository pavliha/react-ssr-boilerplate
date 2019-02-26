import { Form, Field } from 'formik'
import React from 'react'
import { object } from 'prop-types'
import { Button, CardActions, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TextField from 'src/components/controls/TextField/FormikTextField'
import formik from './formik'

const styles = theme => ({
  root: {},
  link: {
    paddingLeft: 10,
    color: theme.palette.primary.main
  },
  actions: {
    margin: '15px -10px',
  }
})

const LoginForm = ({ classes }) =>
  <Form className={classes.root}>

    <Field name="email" label="Enter your email address" margin="normal" component={TextField} />
    <Field name="password" label="Enter your password" type="password" margin="normal" component={TextField} />
    <CardActions className={classes.actions}>
      <Button color="primary" variant="outlined" type="submit">Login</Button>
      <Typography>
        <Link className={classes.link} to="/auth/password/forgot">Forgot your password?</Link>
      </Typography>
    </CardActions>
  </Form>

LoginForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(LoginForm))
