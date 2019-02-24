import Http from 'src/services/Http'

class Photos {
  async all() {
    return Http.get('/photos')
  }

  sort(photos_ids) {
    return Http.patch('/photos', { photos_ids })
  }

  upload(file, isPortrait) {
    const formData = new FormData()
    formData.append('picture', file)
    formData.append('isPortrait', isPortrait)

    return Http.post('/photos', formData)
  }

  destroy(photo_id) {
    return Http.delete(`/photos/${photo_id}`)
  }
}

export default new Photos()
