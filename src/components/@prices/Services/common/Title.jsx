import React from 'react'
import { object, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    paddingTop: 30,
  }
}

const Title = ({ classes, children }) =>
  <Typography className={classes.root} variant="h5">
    {children}
  </Typography>

Title.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Title)
