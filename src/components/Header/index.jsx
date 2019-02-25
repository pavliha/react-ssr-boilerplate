import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import NavItem from './NavItem'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    height: 60,
  }
})

const Header = ({ classes }) =>
  <nav className={classes.root}>
    <ul className={classes.list}>
      <NavItem to="/">ГЛАВНАЯ</NavItem>
      <NavItem to="/photos">ФОТОГАЛЕРЕЯ</NavItem>
      <NavItem to="/video">ОБРАЗЦЫ ВИДЕО</NavItem>
      <NavItem to="/prices">ЦЕНЫ И УСЛУГИ</NavItem>
      <NavItem to="/contacts">КОНТАКТЫ</NavItem>
    </ul>
  </nav>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
