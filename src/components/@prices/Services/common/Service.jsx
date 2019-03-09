import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 20,
    width: 350,
    border: '1px #dadce0 solid',
    borderRadius: 5,
    textAlign: 'center',
  },
}

const Service = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Service.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Service)
