import axios from 'axios';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

axios.defaults.baseURL = 'http://localhost:3000/api';

// Define the shape of the user object
interface User {
  id: string; // Adjust the fields according to your user object
  name: string;
  // Add other user properties as needed
}

// Define the context value shape
interface AuthContextType {
  currentUser: User | null;
  login: (inputs: { email: string; password: string }) => Promise<void>; // Adjust input types as necessary
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  const login = async (inputs: { email: string; password: string }) => {
    try {
      const res = await axios.post<User>('/auth/login', inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
