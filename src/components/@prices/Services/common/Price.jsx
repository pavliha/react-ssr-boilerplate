import React from 'react'
import { object, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    padding: 30,
  },
}

const Price = ({ classes, children }) =>
  <Typography className={classes.root} variant="h4">
    {children}
  </Typography>

Price.propTypes = {
  classes: object.isRequired,
  children: string.isRequired,
}

export default withStyles(styles)(Price)
