import React from 'react'
import { array, object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import FotoramaSlider from './FotoramaSlider'

const styles = {
  root: {
    display: 'flex',
    padding: 40,
    height: 804,
  },
  slider: {
    height: 804,
    width: 1000,
  },
  description: {
    height: 804,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  hr: {
    margin: '20px 0',
    width: 50,
  },
  article: {
    paddingBottom: 25,
  },
  articleSection: {
    maxWidth: 500,
  }
}

const SliderSection = ({ classes, photos }) =>
  <section className={classes.root}>
    <div className={classes.slider}>
      <FotoramaSlider photos={photos} />
    </div>
    <div className={classes.description}>
      <div className={classes.articleSection}>
        <Typography variant="h3">Фотосъемка</Typography>
        <hr className={classes.hr} />
        <Typography variant="h6" component="article" className={classes.article}>
          Видеосъемкой занимаюсь давно и с увлечением.
          Здесь реализуются творческие замыслы, здесь
          безграничное поле для экспериментов, здесь
          можно проявить полет фантазии, постоянно
          находить новые решения и совершенствовать
          мастерство. При этом очень важно учитывать и
          пожелания клиентов, понимать их видение того
          или иного эпизода.
        </Typography>
        <Button size="large" variant="outlined">СМОТРЕТЬ ФОТОГРАФИИ</Button>
      </div>
    </div>
  </section>

SliderSection.propTypes = {
  classes: object.isRequired,
  photos: array.isRequired,
}

export default withStyles(styles)(SliderSection)
