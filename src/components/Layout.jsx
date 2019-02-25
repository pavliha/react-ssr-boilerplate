import React, { Component } from 'react'
import { object, array } from 'prop-types'
import loadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import IndexScene from './IndexScene'
import Header from './Header'
import connector from './connector'

/**
 * Util to prefetch data on server
 */


const AdminLayout = loadable(() => import('./@admin/AdminLayout'))
const PricesScene = loadable(() => import('./@prices/PricesScene'))

/**
 * Some dummy layout to show code splitting is working
 */
class Layout extends Component {

  componentDidMount() {
    const { actions, photos } = this.props
    if (isEmpty(photos)) {
      actions.photos.all()
    }
  }

  render() {
    return (
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
    )
  }
}

Layout.propTypes = {
  actions: object.isRequired,
  photos: array.isRequired,
}
export default connector(Layout)
