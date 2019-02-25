import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from '../../common/Title'
import Price from '../../common/Price'
import ServiceList from '../../common/ServiceList'
import ListItem from '../../common/ServiceList/ListItem'
import Service from '../../common/Service'

const styles = theme => ({
  color: {
    color: theme.palette.warning.main
  },
})

const Regular = ({ classes }) =>
  <Service>
    <Title>
      Пакет<br /> «<span className={classes.color}>Стандарт</span>»
    </Title>
    <Price>
      4000 грн
    </Price>
    <ServiceList>
      <ListItem>До банкета</ListItem>
      <ListItem>300 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный DVD-диск</ListItem>
    </ServiceList>
  </Service>

Regular.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Regular)
