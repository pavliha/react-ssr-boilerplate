import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { BACKEND_URL } from 'src/constants'

const styles = {
  root: {
    width: 800,
    height: 600,
    backgroundPosition: 'center'
  },
}

const Slide = ({ classes, photo }) =>
  <div className={classes.root} style={{
    backgroundImage: `url(${BACKEND_URL}${photo.url})`
  }} />

Slide.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
}

export default withStyles(styles)(Slide)
