import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/register', // Corrected endpoint
        inputs
      )
      console.log('Registration Successful:', res.data)
      // Optionally, redirect or show success message
    } catch (error) {
      console.error('Registration Error:', error)
      // Handle error state or display error message
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
    </div>
  )
}

export default Register
