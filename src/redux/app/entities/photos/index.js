import { all, call, takeEvery } from 'redux-saga/effects'
import Photos from 'api/Photos'
import api from 'engines/api'
import actions, { DESTROY_PHOTO, LOAD_PHOTOS, SORT_PHOTOS, UPLOAD_PHOTO } from './action'

function * loadAll({ payload }) {
  yield call(actions.all, payload)

  yield api({
    type: LOAD_PHOTOS,
    callable: call(Photos.all, payload)
  })
}

function * uploadPhoto({ payload }) {
  yield call(actions.upload, payload)

  yield api({
    type: UPLOAD_PHOTO,
    callable: call(Photos.upload, payload)
  })
}

function * sortPhotos({ payload }) {
  yield call(actions.sort, payload)

  yield api({
    type: UPLOAD_PHOTO,
    callable: call(Photos.upload, payload)
  })
}

function * destroyPhoto({ payload }) {
  yield call(actions.destroy, payload)

  yield api({
    type: UPLOAD_PHOTO,
    callable: call(Photos.upload, payload)
  })
}

export default function * auth() {
  yield all([
    takeEvery(LOAD_PHOTOS, loadAll),
    takeEvery(UPLOAD_PHOTO, uploadPhoto),
    takeEvery(SORT_PHOTOS, sortPhotos),
    takeEvery(DESTROY_PHOTO, destroyPhoto)

  ])
}
