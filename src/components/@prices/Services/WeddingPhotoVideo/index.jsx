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

const WeddingVideo = ({ classes }) =>
  <div className={classes.root}>
    <Headline>Всё вместе: фотосъемка и видеосъемка свадьбы</Headline>
    <Services>
      <Budget />
      <Regular />
      <Premium />
    </Services>
    <Description>
      Длительность свадебной видео съемки — зависит от тарифа. Репортажная и постановочная видеосъемка (съемка
      видеоклипов:
      «невеста», «прогулка» и т. п.). Видеосъемка производится с утра (сборы невесты и жениха) и до конца банкета.
      Клиент получает индивидуально оформленный комплект DVD-дисков, также фильм записывается в формате Full HD на
      цифровой носитель клиента. За дополнительную плату, перед свадьбой также снимается видеоклип
      «История любви». В пакет максимальный данная услуга включена
    </Description>
  </div>

WeddingVideo.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(WeddingVideo)
