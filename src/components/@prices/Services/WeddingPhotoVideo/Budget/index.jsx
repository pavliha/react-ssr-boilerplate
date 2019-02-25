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
    color: theme.palette.error.main
  },
})

const Budget = ({ classes }) =>
  <Service>
    <Title>
      Пакет<br /> «<span className={classes.color}>Эконом</span>»
    </Title>
    <Price>
      6000 грн
    </Price>
    <ServiceList>
      <ListItem>ЗАГС и маленькая прогулка</ListItem>
      <ListItem>100 обработаных фотографий</ListItem>
      <ListItem>Индивидуально оформленный комплект DVD-дисков</ListItem>
      <ListItem>Запись Full HD видео на любой носитель</ListItem>
    </ServiceList>
  </Service>

Budget.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Budget)
