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
      5000 грн
    </Price>
    <ServiceList>
      <ListItem>Полный день</ListItem>
      <ListItem>Индивидуально оформленный комплект DVD-дисков</ListItem>
      <ListItem>Запись Full HD видео на любой носитель</ListItem>
      <ListItem>Короткие видеоклипы "невеста", "прогулка"</ListItem>
    </ServiceList>
  </Service>

Regular.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Regular)
