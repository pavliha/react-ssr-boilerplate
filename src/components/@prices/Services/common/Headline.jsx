import React from 'react'
import { object, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 50,
  },
}

const Headline = ({ classes, children }) =>
  <Typography className={classes.root} variant="h4">{children}</Typography>

Headline.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Headline)
