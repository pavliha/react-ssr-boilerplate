import axios from 'axios'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BACKEND_URL,
      timeout: 20000,
    })
  }

  handleError(err) {
    if (err) {
      throw err
    }
  }

  async request(method, url, params, config) {
    try {
      const { data } = await this.instance[method](url, params, config)
      return data
    } catch (err) {
      this.handleError(err)
    }
  }

  get(url, params) {
    return this.request('get', url, params)
  }

  post(url, params, config) {
    return this.request('post', url, params, config)
  }

  put(url, params) {
    return this.request('put', url, params)
  }

  delete(url, params) {
    return this.request('delete', url, params)
  }

  patch(url, params) {
    return this.request('patch', url, params)
  }
}

export default new Http()
