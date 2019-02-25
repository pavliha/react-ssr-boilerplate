import React, { Fragment } from 'react'
import Layout from 'src/components/Layout'
import { Helmet } from 'react-helmet'

const App = () =>
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout />
  </Fragment>

export default App
