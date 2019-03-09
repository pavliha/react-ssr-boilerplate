import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const { BACKEND_URL } = process.env.BACKEND_URL

const styles = {
  root: {
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  overlay: {
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    width: '100%',
    height: '100%',
    '&:hover': {
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  },

  portrait: {
    gridRow: 'span 2'
  },

  closeIcon: {
    color: 'red'
  }
}

const Tile = ({ classes, photo }) =>
  <div
    className={classNames({
      [classes.root]: true,
      [classes.portrait]: photo.isPortrait
    })}
    style={{ backgroundImage: `url(${BACKEND_URL + photo.url})` }}
  >
    <div className={classes.overlay} />
  </div>

Tile.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
}

export default withStyles(styles)(Tile)
