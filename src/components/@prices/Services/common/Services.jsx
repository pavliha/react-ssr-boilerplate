import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
}

const Services = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Services.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Services)
