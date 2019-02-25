import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import AvatarSection from './AvatarSection'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    height: '80vh',
    overflow: 'none',
    position: 'relative',
  },
  picture: {
    zIndex: 0,
    content: '',
    position: 'absolute',
    left: 0,
    bottom: -50,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/images/bg-mountain.png)',
    backgroundPosition: 'bottom',
    backgroundSize: '100%',
    opacity: '0.1',
  }
}

const Banner = ({ classes }) =>
  <div className={classes.root}>
    <AvatarSection />
    <div className={classes.picture} />
  </div>

Banner.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Banner)
