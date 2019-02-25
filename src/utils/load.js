import loadable from '@loadable/component'

export default (path) => {
  console.log('ENV', process.env.CLIENT_WEBPACK, path)
  if (process.env.CLIENT_WEBPACK) {
    return loadable(() => import(path))
  } else {
    return require(path)
  }
}
