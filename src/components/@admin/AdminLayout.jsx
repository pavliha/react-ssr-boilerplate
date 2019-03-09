import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import AdminHeader from './AdminHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import PhotosScene from './@photos/PhotosScene'
import PricesScene from '../@prices/PricesScene'

const styles = {
  root: {},
}

const AdminLayout = ({ classes }) =>
  <div className={classes.root}>
    <AdminHeader />
    <Switch>
      <Route exact path="/admin/photos" component={PhotosScene} />
      <Route exact path="/prices" component={PricesScene} />
      <Redirect to="/photos" />
    </Switch>
  </div>

AdminLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AdminLayout)
