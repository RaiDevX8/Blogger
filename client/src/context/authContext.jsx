import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

// Create AuthContext
export const AuthContext = createContext()

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  // Login function
  const login = async input => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        input
      )
      setCurrentUser(res.data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout')
      setCurrentUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  // Save user to localStorage whenever currentUser changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  // Return the provider component
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
