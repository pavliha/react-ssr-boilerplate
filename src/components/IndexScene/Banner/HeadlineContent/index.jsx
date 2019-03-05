import React from 'react'
import { object, string } from 'prop-types'
import classNames from 'classnames'
import { Button, Typography, withStyles } from '@material-ui/core'
import IAm from './IAm'

const styles = {
  root: {
    boxShadow: 'inset 600px 0px 600px -50px rgba(0,0,0,0.52)',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    paddingLeft: 100,
    color: 'rgba(255,255,255,0.9)'
  },
  headline: {
    paddingTop: 100,
  },
  actions: {
    paddingTop: 100,
  }
}

const HeadLineContent = ({ classes, className, }) =>
  <div className={classNames([classes.root, className])}>
    <IAm />
    <div className={classes.headline}>
      <Typography color="inherit" gutterBottom variant="h3">Свадебный</Typography>
      <Typography color="inherit" gutterBottom variant="h3">фотограф</Typography>
      <Typography color="inherit" gutterBottom variant="h3">и видеооператор</Typography>
    </div>
    <div className={classes.actions}>
      <Button size="large" color="inherit" variant="outlined">СМОТРЕТЬ ФОТОГРАФИИ</Button>
    </div>
  </div>

HeadLineContent.propTypes = {
  classes: object.isRequired,
  className: string.isRequired,
}

export default withStyles(styles)(HeadLineContent)
