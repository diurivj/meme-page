import axios from 'axios'

const baseURL = 'https://meme-api-diuri.herokuapp.com'

const service = axios.create({
  baseURL,
  withCredentials: true
})

const AUTH_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  },
  CREATE: async meme => {
    const { data } = await service.post('/create', meme)
    return data
  },
  FEED: async () => {
    const { data } = await service.get('/memes')
    return data
  }
}

export default AUTH_SERVICE
