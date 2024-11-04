// Login.tsx
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LoginInputs } from '../types'; // Adjust the path based on your file structure

const Login: React.FC = () => {
  const [inputs, setInputs] = useState<LoginInputs>({
    username: '',
    password: '',
  });
  const [err, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const { login, currentUser } = useContext(AuthContext) as { login: (inputs: LoginInputs) => Promise<void>; currentUser: any }; // Adjust currentUser type as necessary
  console.log(currentUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      setError((error as any).response?.data || 'An error occurred'); // Add a fallback error message
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
