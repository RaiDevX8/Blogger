const express = require('express')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
