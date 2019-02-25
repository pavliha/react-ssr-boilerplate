import React from 'react'
import { object, node, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '14pt',
    color: '#e8eced',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.1)'
    },
  },
  selected: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
}

const NavItem = ({ classes, children, history, to }) =>
  <li className={classes.root}>
    <Link
      to={to}
      className={classNames({
        [classes.link]: true,
        [classes.selected]: history.location.pathname === to
      })}
    >
      {children}
    </Link>
  </li>

NavItem.propTypes = {
  classes: object.isRequired,
  to: string.isRequired,
  children: node.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(withRouter(NavItem))
