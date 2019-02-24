import { all, fork } from 'redux-saga/effects'
import photos from './entities/photos'

export default function * rootSaga() {
  yield all([
    fork(photos),
  ])
}
