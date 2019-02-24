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
  payload: { file, isPortrait }
})

const all = () => ({
  type: LOAD_PHOTOS,
})

const sort = (photos_ids) => ({
  type: SORT_PHOTOS,
  meta: { photos_ids }
})

const destroy = (photo_id) => ({
  type: DESTROY_PHOTO,
  meta: { photo_id }
})

export default { all, upload, sort, destroy }
