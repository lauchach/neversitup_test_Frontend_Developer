import axios from 'axios'

// const API_URL = 'https://candidate-assignment.neversitup.com'
const API_URL = 'http://localhost:4000' // mockResfile.js

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Credentials": "true" ,
    "Access-Control-Allow-Origin": "*" ,
    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT" ,
    "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" ,
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
