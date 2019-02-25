import React from 'react'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'
import Header from './Header'

const AdminLayout = loadable(() => import('./@admin/AdminLayout'))
const PricesScene = loadable(() => import('./@prices/PricesScene'))

/**
 * Some dummy layout to show code splitting is working
 */

const Layout = () =>
  <Switch>
    <Route path="/admin" component={() => <AdminLayout />} />
    <Route path="/">
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexScene} />
          <Route exat path="/prices" component={() => <PricesScene />} />
        </Switch>
      </div>
    </Route>
  </Switch>

export default Layout
