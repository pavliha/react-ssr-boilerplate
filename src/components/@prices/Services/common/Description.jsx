import React from 'react'
import { object, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 15,
  },
}

const Description = ({ classes, children }) =>
  <Typography variant="caption" className={classes.root}>
    {children}
  </Typography>

Description.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Description)
