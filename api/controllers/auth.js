const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = (req, res) => {
  const { username, email, password } = req.body

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
}
const login = (req, res) => {
  // Implement login functionality

  const q = 'select * from user where username = ?'
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err)
    if (data.length === 0) return res.status(404).json('user not found')

    //check password if no error
    const isPasswordCurrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    )

    if (!isPasswordCurrect)
      return res.status(400).json('wrong user name or password')
    const { password, ...other } = data[0]

    const token = jwt.sign({ id: data[0].id }, 'jwtkey')
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(other)
  })
}


const logout = (req, res) => {
  // Implement logout functionality
}

module.exports = { register, login, logout }
