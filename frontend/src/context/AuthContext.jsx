import { createContext, useState, useEffect, useContext } from 'react'
import api from '../utils/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem('token')
      if (storedToken) {
        try {
          const response = await api.get('/auth/me')
          if (response.data.success) {
            setUser(response.data.data.user)
            setToken(storedToken)
          }
        } catch (error) {
          console.error('Session restore failed:', error)
          localStorage.removeItem('token')
          setToken(null)
        }
      }
      setLoading(false)
    }

    restoreSession()
  }, [])

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password })
    if (response.data.success) {
      const { token, user } = response.data.data
      localStorage.setItem('token', token)
      setToken(token)
      setUser(user)
      return user
    }
  }

  const register = async (name, email, password) => {
    const response = await api.post('/auth/register', { name, email, password })
    if (response.data.success) {
      const { token, user } = response.data.data
      localStorage.setItem('token', token)
      setToken(token)
      setUser(user)
      return user
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
