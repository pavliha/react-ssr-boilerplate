import React from 'react'
import { object, string } from 'prop-types'
import { ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core'
import CheckIcon from 'mdi-react/CheckIcon'

const styles = theme => ({
  root: {},
  icon: {
    color: theme.palette.success.main,
  }
})

const ServiceListItem = ({ classes, children }) =>
  <ListItem>
    <ListItemIcon>
      <CheckIcon className={classes.icon} />
    </ListItemIcon>
    <ListItemText primary={children} />
  </ListItem>

ServiceListItem.propTypes = {
  classes: object.isRequired,
  children: string.isRequired,
}

export default withStyles(styles)(ServiceListItem)
