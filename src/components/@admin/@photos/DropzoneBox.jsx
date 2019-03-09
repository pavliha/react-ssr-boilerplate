import React from 'react'
import { func, object } from 'prop-types'
import Dropzone from 'react-dropzone'
import { withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  container: {
    margin: 30,
    height: 200,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${theme.palette.primary.main} `,
    borderRadius: 3,
  }
})

class DropzoneBox extends React.Component {
  onDrop = (acceptedFiles) => {
    const { onDrop } = this.props
    onDrop(acceptedFiles)
  }

  render() {
    const { classes } = this.props

    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classes.container}>
              <input {...getInputProps()} />
              <div>
                {
                  isDragActive
                    ? <Typography>Перетащи фотографии сюда</Typography>
                    : <Typography>Нажми сюда что бы выбрать фото</Typography>
                }
              </div>
            </div>
          )
        }}
      </Dropzone>
    )
  }
}

DropzoneBox.propTypes = {
  onDrop: func.isRequired,
  classes: object.isRequired,
}

export default withStyles(styles)(DropzoneBox)
