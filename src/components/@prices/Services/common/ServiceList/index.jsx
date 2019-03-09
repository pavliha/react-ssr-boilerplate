import React from 'react'
import { object, node } from 'prop-types'
import { List, withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const ServiceList = ({ classes, children }) =>
  <List className={classes.list}>
    {children}
  </List>

ServiceList.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ServiceList)
