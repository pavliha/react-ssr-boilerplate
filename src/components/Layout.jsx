import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexScene from './IndexScene'
import Header from './Header'
import load from 'src/utils/load'

const AdminLayout = load('./@admin/AdminLayout')
const PricesScene = load('./@prices/PricesScene')

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
