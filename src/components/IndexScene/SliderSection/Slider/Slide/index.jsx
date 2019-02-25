import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: 800,
    height: 600,
    backgroundPosition: 'center'
  },
}

const Slide = ({ classes, photo }) =>
  <div className={classes.root} style={{
    backgroundImage: `url(${photo.url})`
  }} />

Slide.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
}

export default withStyles(styles)(Slide)
