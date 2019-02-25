import React, { Component, memo } from 'react'
import { object, array } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import connector from './connector'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const styles = {
  root: {
    color: '#fafafa',
    display: 'flex',
    padding: 30,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#263238',
    alignItems: 'center',
  },

  headline: {
    margin: '30px 0',
  },

  text: {
    paddingRight: 30,
  },
  description: {
    maxWidth: 500,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 40,
  },

}

class SliderSection extends Component {

  render() {
    const { classes, photos } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.description}>
          <Typography className={classes.headline} color="inherit" gutterBottom variant="h4">
            Фотосъемка свадеб
          </Typography>
          <Typography className={classes.text} color="inherit" variant="h6">
            Фотосъемкой занимаюсь давно и с увлечением. Здесь реализуются творческие замыслы, здесь безграничное поле
            для
            экспериментов, здесь можно проявить полет фантазии, постоянно находить новые решения и совершенствовать
            мастерство. При этом очень важно учитывать и пожелания клиентов, понимать их видение того или иного эпизода.
          </Typography>
          <div className={classes.actions}>
            <Link to="/photos">
              <Button variant="contained" color="primary">
                смотреть все фотографии
              </Button>
            </Link>

            <Link to="/prices#WeddingPhoto">
              <Button color="secondary">
                Цены за фотосьемку
              </Button>
            </Link>
          </div>
        </div>
        <Slider photos={photos} />
      </div>
    )
  }
}

SliderSection.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(connector(memo(SliderSection, () => true)))
