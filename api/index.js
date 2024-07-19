import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js' // Ensure the path is correct

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  })
)
app.use(cookieParser())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000')
})
