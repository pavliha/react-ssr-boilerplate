import React from 'react'
import { object } from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'

const styles = {
  root: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px rgba(0,0,0,0.3)',
  },
  name: {
    fontSize: 40,
  },
  lastName: {
    fontSize: 60,
    lineHeight: 1.2,
  },
  avatar: {
    paddingRight: 30,
  },
  description: {
    lineHeight: 2.5,
    fontSize: 16,
  }
}

const AvatarSection = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.avatar}>
      <img alt="Николай Костюк" src="/images/iam-1.png" width="200px" />
    </div>
    <div>
      <Typography color="inherit" className={classes.name}>Костюк</Typography>
      <Typography color="inherit" className={classes.lastName}>Николай</Typography>
      <Typography color="inherit" className={classes.description}>Фотограф и видеооператор</Typography>
    </div>
  </div>

AvatarSection.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AvatarSection)
