import React from 'react'
import '../style.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button onClick={()=>{}}>Login</button>
        <p>something went wrong</p>
        <span>
        Don't you have account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
