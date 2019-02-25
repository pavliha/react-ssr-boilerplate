/* eslint-disable padded-blocks */
import React, { Component } from 'react'
import { array, func } from 'prop-types'
import { arrayMove } from 'react-sortable-hoc'
import SortableGrid from './SortableGrid'

class PhotosGrid extends Component {

  sort = ({ oldIndex, newIndex }) => {
    const { onSort, photos } = this.props

    const sortedPhotos = arrayMove(photos, oldIndex, newIndex)

    onSort(sortedPhotos.map(p => p.id))
  }

  render() {
    const { onDelete, photos } = this.props

    return (
      <SortableGrid
        photos={photos}
        axis="xy"
        useDragHandle
        onSortEnd={this.sort}
        onDelete={onDelete}
      />
    )
  }
}

PhotosGrid.propTypes = {
  photos: array.isRequired,
  onSort: func.isRequired,
  onDelete: func.isRequired
}

export default PhotosGrid
