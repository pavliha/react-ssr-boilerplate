import React from 'react'
import { withStyles } from '@material-ui/core'
import { object } from 'prop-types'
import Banner from './Banner'
import SliderSection from './SliderSection'

const styles = {}
const Index = ({ classes }) =>
  <main className={classes.root}>
    <Banner />
    <SliderSection />
  </main>

Index.propTypes = {
  classes: object.isRequired
}
export default withStyles(styles)(Index)
