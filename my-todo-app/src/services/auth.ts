// services/auth.ts
import { apiClient } from '../utils/apiClient'

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', { username, password })
    const { access_token } = response.data

    // Store the token in localStorage for future requests
    localStorage.setItem('token', access_token)

    return access_token
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
