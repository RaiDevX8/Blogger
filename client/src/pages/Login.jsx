import React, { useContext, useState } from 'react'
import '../style.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext.jsx'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const {login} = useContext(AuthContext)

console.log(login);
  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        inputs
      )
      navigate('/')
      console.log('Registration Successful:', res.data)
      setError(null) // Clear any previous error
    } catch (error) {
      console.error('Registration Error:', error)
      if (error.response) {
        console.log('Error Response Data:', error.response.data)
        console.log('Error Response Status:', error.response.status)
        if (error.response.status === 409) {
          setError('User already exists')
        } else {
          setError('An error occurred. Please try again.')
        }
      } else {
        setError('An unexpected error occurred.')
      }
    }
  }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Login</button>
        <p>{error}</p>
        <span>
        Don't you have account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
