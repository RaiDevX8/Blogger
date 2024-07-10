import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

axios.defaults.baseURL = 'http://localhost:3000/api'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = async inputs => {
    try {
      const res = await axios.post('/auth/login', inputs)
      setCurrentUser(res.data)
    } catch (error) {
      console.error('Login Error:', error)
    }
  }

  const logout = async () => {
    try {
      await axios.post('/auth/logout')
      setCurrentUser(null)
    } catch (error) {
      console.error('Logout Error:', error)
    }
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
