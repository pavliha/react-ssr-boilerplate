import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import NavItem from './NavItem'
import MenuIcon from 'mdi-react/MenuIcon'

const styles = (theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'all .2s ease-out 0.1s',
  },
  list: {
    flexGrow: 1,
    display: 'none',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    listStyle: 'none',
    height: 60,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    padding: 20,
    color: 'white'
  }
})

class Header extends Component {

  constructor(props) {
    super(props)
    const { pathname } = props

    this.state = {
      color: pathname === '/' ? 'transparent' : 'rgba(0,0,0,0.7)'
    }

  }

  componentWillUpdate(props, state) {

    if (this.props.pathname === props.pathname) return

    this.setState({ color: props.pathname === '/' ? 'transparent' : 'rgba(0,0,0,0.7)' })
  }

  listenScrollEvent = e => {
    const { pathname } = this.props
    if (pathname !== '/') return

    if (window.scrollY > 400) {
      this.setState({ color: 'rgba(0,0,0,0.7)' })
    } else {
      this.setState({ color: 'transparent' })
    }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const { classes } = this.props
    const { color } = this.state

    return (
      <nav className={classes.root} style={{ background: color }}>
        <ul className={classes.list}>
          <NavItem to="/">ГЛАВНАЯ</NavItem>
          <NavItem to="/photos">ФОТОГАЛЕРЕЯ</NavItem>
          <NavItem to="/video">ОБРАЗЦЫ ВИДЕО</NavItem>
          <NavItem to="/prices">ЦЕНЫ И УСЛУГИ</NavItem>
          <NavItem to="/contacts">КОНТАКТЫ</NavItem>
        </ul>
        <IconButton className={classes.iconButton}><MenuIcon /></IconButton>
      </nav>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  pathname: string.isRequired,
}

export default withStyles(styles)(Header)
