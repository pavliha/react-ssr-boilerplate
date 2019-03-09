import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import AdminHeader from './AdminHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import PhotosScene from './@photos/PhotosScene'
import DevelopmentScene from './@prices/DevelopmentScene'

const styles = {
  root: {},
}

const AdminLayout = ({ classes }) =>
  <div className={classes.root}>
    <AdminHeader />
    <Switch>
      <Route exact path="/admin/photos" component={PhotosScene} />
      <Route exact path="/admin/prices" component={DevelopmentScene} />
      <Route exact path="/admin/contacts" component={DevelopmentScene} />
      <Redirect to="/admin/photos" />
    </Switch>
  </div>

AdminLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AdminLayout)
