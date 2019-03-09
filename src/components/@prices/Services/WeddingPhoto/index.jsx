import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Budget from './Budget'
import Regular from './Regular'
import Premium from './Premium'
import Headline from '../common/Headline'
import Services from '../common/Services'
import Description from '../common/Description'

const styles = {}

const WeddingPhoto = ({ classes }) =>
  <div className={classes.root} id="WeddingPhoto">
    <Headline>Фотосьемка свадьбы</Headline>
    <Services>
      <Budget />
      <Regular />
      <Premium />
    </Services>
    <Description>
      Длительность свадебной съемки — завист от тарифа. Репортажная и постановочная фотосъёмка с утренних сборов и до
      конца
      банкета. Выездная фотосессия (место для фотосессии предварительно согласовывается с клиентом). Клиент получает
      индивидуально оформленный DVD-диск с фотографиями. Все фотографии проходят RAW-конвертацию,
      цветокоррекцию, обрезку, ретуширование, художественную обработку (изменение цветовой гаммы, черно-белый вариант и
      т.п.)
    </Description>
  </div>

WeddingPhoto.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(WeddingPhoto)
