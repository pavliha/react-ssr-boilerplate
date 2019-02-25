import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 40,
    border: '1px #dadce0 solid',
    borderRadius: 5,
    padding: 30,
  }
}

const Info = ({ classes }) =>
  <div className={classes.root}>
    <Typography>
      На всех мероприятиях мы работаем всегда вдвоем: видеооператор и фотограф. Приезжаем на своем автомобиле, который
      потом используется для производства видеосъемки. Все необходимое оборудование (освещение реквизит фотографа и т.
      п.), возим с собой.
    </Typography>
    <br />
    <Typography>
      Если ни один из предложенный вариантов не соответствует вашим пожеланиям - предложите свой, и мы обсудим его
      стоимость. Дата съемки бронируется внесением аванса — 30% от стоимости выбранного пакета.
    </Typography>
  </div>

Info.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Info)
