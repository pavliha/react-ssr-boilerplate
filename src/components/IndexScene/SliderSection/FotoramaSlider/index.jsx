import React, { Component } from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { BACKEND_URL } from 'src/constants'

const styles = {
  root: {
    overflow: 'hidden',
  },
}

class FotoramaSlider extends Component {
  componentDidMount() {
    const { $ } = window
    $('.fotorama')
    // Listen to the events
      .on('fotorama:ready ' + // Fotorama is fully ready
        'fotorama:show ' + // Start of transition to the new frame
        'fotorama:showend ' + // End of the show transition
        'fotorama:load ' + // Stage image of some frame is loaded
        'fotorama:error ' + // Stage image of some frame is broken
        'fotorama:startautoplay ' + // Slideshow is started
        'fotorama:stopautoplay ' + // Slideshow is stopped
        'fotorama:fullscreenenter ' + // Fotorama is fullscreened
        'fotorama:fullscreenexit ' + // Fotorama is unfullscreened
        'fotorama:loadvideo ' + // Video iframe is loaded
        'fotorama:unloadvideo', // Video iframe is removed
      function(e, fotorama, extra) {
        console.log('## ' + e.type)
        console.log('active frame', fotorama.activeFrame)
        console.log('additional data', extra)
      })
      // Initialize fotorama manually
      .fotorama()
  }

  render() {
    const { classes, photos } = this.props

    return (
      <div className={classes.root}>
        <div
          className="fotorama"
          data-nav="thumbs"
          data-height="700"
          data-thumbwidth="150"
          data-thumbheight="100"
          data-auto="false"
        >
          {photos.map(photo => <img key={photo.id} alt={photo.url} src={BACKEND_URL + photo.url} />)}
        </div>
      </div>
    )
  }
}

FotoramaSlider.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(FotoramaSlider)
