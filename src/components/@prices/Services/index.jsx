import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import WeddingPhoto from './WeddingPhoto'
import WeddingVideo from './WeddingVideo'
import WeddingPhotoVideo from './WeddingPhotoVideo'
import CelebrationPhoto from './CelebrationPhoto'
import Info from './Info'

const styles = {
  headline: {
    padding: 40,
  },
}

const Services = ({ classes }) =>
  <div className={classes.root}>
    <Info />
    <WeddingPhotoVideo />
    <WeddingPhoto />
    <WeddingVideo />
    <CelebrationPhoto />
  </div>

Services.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Services)
