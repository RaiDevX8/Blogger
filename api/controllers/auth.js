const db = require('../db')
const bcrypt = require('bcryptjs')
console.log(db)
const register = (req, res) => {
  const { username, email, password } = req.body

  try {
    const checkQuery = 'SELECT * FROM user WHERE email = ? OR username = ?'
    db.query(checkQuery, [email, username], (err, data) => {
      if (err) {
        console.error('Database error during user check:', err)
        return res.status(500).json({ error: 'Database error' })
      }

      if (data.length > 0) {
        return res.status(409).json('User already exists')
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      const insertQuery =
        'INSERT INTO user (username, email, password) VALUES (?, ?, ?)'
      const values = [username, email, hash]

      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error('Database error during user insert:', err)
          return res.status(500).json({ error: 'Database error' })
        }

        return res.status(200).json('User has been created successfully')
      })
    })
  } catch (error) {
    console.error('Unexpected error during registration:', error)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}

const login = (req, res) => {
  // Implement login functionality
}

const logout = (req, res) => {
  // Implement logout functionality
}

module.exports = { register, login, logout }
