import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    maxWidth: 1270,
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

class DevelopmentScene extends Component {

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        Эта страница ещё на этапе разрабоки
      </div>
    )
  }
}

DevelopmentScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(DevelopmentScene)
