import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Title from '../../common/Title'
import Price from '../../common/Price'
import Service from '../../common/Service'
import ServiceList from '../../common/ServiceList'
import ListItem from '../../common/ServiceList/ListItem'

const styles = theme => ({
  color: {
    color: theme.palette.success.main
  },
})

const Premium = ({ classes }) =>
  <Service>
    <Title>
      Пакет <br /> «<span className={classes.color}>Максимальный</span>»
    </Title>
    <Price>
      10000 грн
    </Price>
    <ServiceList>
      <ListItem>Полный день</ListItem>
      <ListItem>500 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный комплект DVD-дисков</ListItem>
      <ListItem>Запись Full HD видео на любой носитель</ListItem>
      <ListItem>Короткие видеоклипы "невеста", "прогулка"</ListItem>
      <ListItem>Свадебный клип "История любви"</ListItem>
    </ServiceList>
  </Service>

Premium.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Premium)
