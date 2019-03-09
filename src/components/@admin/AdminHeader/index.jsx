import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import NavItem from './NavItem'

const styles = {
  root: {
    backgroundColor: '#1874ce',
  },
  list: {
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    height: 60,
  }
}

const Header = ({ classes }) =>
  <nav className={classes.root}>
    <ul className={classes.list}>
      <NavItem to="/admin/photos">ФОТОГРАФИИ</NavItem>
      <NavItem to="/admin/prices">ЦЕНЫ И УСЛУГИ</NavItem>
      <NavItem to="/admin/contacts">КОНТАКТЫ</NavItem>
    </ul>
  </nav>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
