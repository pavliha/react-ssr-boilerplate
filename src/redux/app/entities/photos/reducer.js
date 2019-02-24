import arrayToObject from 'utils/arrayToObject'
import {
  UPLOAD_PHOTO_FULFILLED,
  LOAD_PHOTOS_FULFILLED,
  DESTROY_PHOTO_FULFILLED,
  SORT_PHOTOS_PENDING,
} from './action'

const photosReducer = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case LOAD_PHOTOS_FULFILLED:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case UPLOAD_PHOTO_FULFILLED:
      return {
        ...state,
        [payload.id]: payload
      }

    case DESTROY_PHOTO_FULFILLED: {
      const photos = { ...state }

      delete photos[meta.photo_id]

      return photos
    }

    case SORT_PHOTOS_PENDING: {
      const photos = { ...state }
      const { photos_ids } = meta

      return arrayToObject(photos_ids.map((id, index) => ({
        ...photos[id],
        displayOrder: index,
      })))
    }

    default:
      return state
  }
}

export default photosReducer
