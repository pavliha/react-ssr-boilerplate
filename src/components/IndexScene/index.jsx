import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Index = () =>
  <div>
    <Header />
    <Link to="/async">async</Link>
  </div>

export default Index
