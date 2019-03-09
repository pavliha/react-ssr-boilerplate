import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import HeadlineContent from './HeadlineContent'
import photo from './background.jpg'

const styles = {
  root: {
    height: '100%',
    minHeight: 950,
  },
  picture: {
    position: 'relative',
    boxShadow: 'inset 0px 84px 200px -16px rgba(0,0,0,0.7)',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${photo})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 950,
  }
}

const Banner = ({ classes }) =>
  <div className={classes.root}>
    <HeadlineContent className={classes.content} />
    <div className={classes.picture} />
  </div>

Banner.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Banner)
