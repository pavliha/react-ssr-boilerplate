import React, { Component } from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Tile from './Tile'

const styles = {
  root: {
    minHeight: 500,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 300px);',
    gridAutoRows: '200px',
    justifyContent: 'center',
    gridGap: '3px'
  },
}

class PhotosSection extends Component {

  render() {
    const { classes, photos } = this.props

    return (
      <div className={classes.root}>
        {photos.map(photo => <Tile key={photo.id} photo={photo} />)}
      </div>
    )
  }
}

PhotosSection.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(PhotosSection)
