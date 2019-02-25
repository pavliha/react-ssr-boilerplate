import Photos from 'src/api/Photos'

export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'
export const UPLOAD_PHOTO_PENDING = 'UPLOAD_PHOTO_PENDING'
export const UPLOAD_PHOTO_FULFILLED = 'UPLOAD_PHOTO_FULFILLED'

export const LOAD_PHOTOS = 'LOAD_PHOTOS'
export const LOAD_PHOTOS_FULFILLED = 'LOAD_PHOTOS_FULFILLED'

export const SORT_PHOTOS = 'SORT_PHOTOS'
export const SORT_PHOTOS_PENDING = 'SORT_PHOTOS_PENDING'
export const SORT_PHOTOS_FULFILLED = 'SORT_PHOTOS_FULFILLED'

export const DESTROY_PHOTO = 'DESTROY_PHOTO'
export const DESTROY_PHOTO_FULFILLED = 'DESTROY_PHOTO_FULFILLED'

const upload = (file, isPortrait) => ({
  type: UPLOAD_PHOTO,
  payload: Photos.upload(),
  meta: { file, isPortrait }
})

const all = () => ({
  type: LOAD_PHOTOS,
  payload: Photos.all()
})

const sort = (photos_ids) => ({
  type: SORT_PHOTOS,
  payload: Photos.sort(photos_ids),
  meta: { photos_ids }
})

const destroy = (photo_id) => ({
  type: DESTROY_PHOTO,
  payload: Photos.destroy(photo_id),
  meta: { photo_id }
})

export default { all, upload, sort, destroy }
