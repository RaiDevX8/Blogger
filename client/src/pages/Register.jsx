import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/auth/register', inputs)
      navigate('/login')
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Register
