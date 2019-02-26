import React from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Slide from './Slide'

const styles = {
  root: {},
}

const Slider = ({ classes, photos }) =>
  <div className={classes.root}>
    {photos.map(photo => <Slide key={photo.id} photo={photo} />)}
  </div>

Slider.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(Slider)
