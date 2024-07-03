const express = require('express')
const { register, login, logout } = require('../controllers/auth')
const router = express.Router()

// Register a new user
router.post('/register', register)

// User login
router.post('/login', login)

// User logout (example with GET method, adjust as needed)
router.get('/logout', logout)

module.exports = router
