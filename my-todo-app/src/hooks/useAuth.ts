import { useState } from 'react'

export function useAuth() {
  const [token, setTokenState] = useState<string | null>(null)

  const setToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  const getToken = () => {
    return token || localStorage.getItem('token')
  }

  return { token, setToken, getToken }
}
