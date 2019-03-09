import React from 'react'
import { object, array, func } from 'prop-types'
import { SortableContainer } from 'react-sortable-hoc'
import { withStyles } from '@material-ui/core'
import Tile from './Tile'
import Actions from './Actions'

const styles = {
  root: {
    margin: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 300px);',
    gridAutoRows: '200px',
    justifyContent: 'center',
    gridGap: '3px'
  },
}

const SortableGrid = ({ classes, photos, onDelete }) =>
  <div className={classes.root}>
    {photos.map((photo, index) =>
      <Tile
        index={index}
        key={photo.id}
        photo={photo}

      >
        <Actions
          photo={photo}
          onDelete={onDelete}
        />
      </Tile>
    )}
  </div>

SortableGrid.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
  onDelete: func.isRequired,
}

export default SortableContainer(withStyles(styles)(SortableGrid))
