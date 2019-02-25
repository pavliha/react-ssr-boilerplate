import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Services from './Services'

const styles = {
  root: {
    margin: '0 auto',
    maxWidth: 1100
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  }
}

const PricesScene = ({ classes }) =>
  <div className={classes.root}>
    <Services />
  </div>

PricesScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(PricesScene)
