import React, { Component } from 'react'
import { object, func } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'

const styles = {
  root: {
  },
  closeIcon: {
    color: 'red'
  }
}

class Actions extends Component {

  remove = () => {
    const { onDelete, photo } = this.props

    onDelete(photo.id)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <IconButton
          className={classes.closeIcon}
          onClick={this.remove}
        >
          <CloseIcon />
        </IconButton>
      </div>
    )
  }
}

Actions.propTypes = {
  classes: object.isRequired,
  photo: object.isRequired,
  onDelete: func.isRequired,
}

export default withStyles(styles)(Actions)
