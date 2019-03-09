import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { sortableHandle } from 'react-sortable-hoc'
import DragHorizontalIcon from 'mdi-react/DragHorizontalIcon'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'move',
  },
  icon: {
    color: 'white',
    marginBottom: 45
  }
}

const DragHandle = ({ classes }) =>
  <div className={classes.root}>
    <DragHorizontalIcon className={classes.icon} />
  </div>

DragHandle.propTypes = {
  classes: object.isRequired,
}

export default sortableHandle(withStyles(styles)(DragHandle))
