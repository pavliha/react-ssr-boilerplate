import React, { Component } from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core'
import DropzoneBox from './DropzoneBox'
import PhotosGrid from './PhotosGrid'
import connector from './connector'
import isEmpty from 'lodash/isEmpty'

const styles = {
  root: {
    maxWidth: 1270,
    margin: '0 auto',
  },
}

class PhotosScene extends Component {

  preview = (file) => new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      const image = new Image()
      image.src = reader.result

      image.onload = () => {
        resolve([image.width, image.height])
      }
    }

    reader.readAsDataURL(file)
  })

  upload = async (files) => {
    const { actions } = this.props
    files.forEach(async file => {
      const [width, height] = await this.preview(file)
      const isPortrait = width < height
      console.log(width, height)
      actions.photos.upload(file, isPortrait)
    })
  }

  sort = (photos_ids) => {
    const { actions } = this.props
    actions.photos.sort(photos_ids)
  }

  remove = (photo_id) => {
    const { actions } = this.props
    actions.photos.destroy(photo_id)
  }

  render() {
    const { classes, photos } = this.props

    return (
      <div className={classes.root}>
        <DropzoneBox onDrop={this.upload} />
        {!isEmpty(photos) && (
          <PhotosGrid
            photos={photos}
            onSort={this.sort}
            onDelete={this.remove}
          />
        )}
      </div>
    )
  }
}

PhotosScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(connector(PhotosScene))
