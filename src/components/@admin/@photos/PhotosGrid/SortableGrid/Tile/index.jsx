import React from 'react'
import { node, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { SortableElement } from 'react-sortable-hoc'
import DragHandle from './DragHandle'
import { BACKEND_URL } from 'src/constants'

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

const Tile = ({ classes, photo, children }) =>
  <div
    className={classNames({
      [classes.root]: true,
      [classes.portrait]: photo.isPortrait
    })}
    style={{ backgroundImage: `url(${BACKEND_URL + photo.url})` }}
  >
    <div className={classes.overlay}>
      {children}
      <DragHandle />
    </div>
  </div>

Tile.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
  children: node.isRequired,
}

export default SortableElement(withStyles(styles)(Tile))
