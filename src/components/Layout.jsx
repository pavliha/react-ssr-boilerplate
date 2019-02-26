import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'

const AuthLayout = loadable(() => import('./@auth/AuthLayout'))

const Layout = () =>
  <Switch>
    <Route path="/auth" component={() => <AuthLayout />} />
  </Switch>

export default Layout
