import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AuthContextType } from '../types'
import Logo from './logo.png'
import { FaUserCircle, FaBars, FaTimes, FaPen } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
  const toggleMenu = () => setMenuOpen(prev => !prev)  

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" height={50} width={100} />
          </Link>
        </div>

       
        {/* Hamburger Icon (Mobile Only) */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Menu Links */}
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
 {/* Write Icon and Link */}
 <span className="write">
          <Link className="link" to="/write">
            <FaPen size={22} />
          </Link>
        </span>

          {currentUser ? (
            <div className="profile-dropdown">
              <div className="profile-icon" onClick={toggleDropdown}>
                <FaUserCircle size={26} />
              </div>
              <div className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                <ul>
                  <li><strong>Username:</strong> {currentUser.username}</li>
                  <li><strong>Email:</strong> {currentUser.email}</li>
                  <li><button onClick={logout} className="logout-btn">Logout</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <Link className="link" to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
