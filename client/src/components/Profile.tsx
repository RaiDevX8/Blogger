import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { AuthContextType } from '../types'

const Profile: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType

  if (!currentUser) {
    return (
      <div>
        <h2>Please log in to view your profile</h2>
      </div>
    )
  }

  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <ul className="profile-list">
        <li><strong>Username:</strong> {currentUser.username}</li>
        <li><strong>Email:</strong> {currentUser.email}</li> 
      </ul>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  )
}

export default Profile
