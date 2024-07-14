import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js' // Adjust the path as necessary
import postRoutes from './routes/posts.js' // Import the post routes

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  })
)
app.use(cookieParser()) // Add cookie parser middleware if using cookies for JWT
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes) // Use the post routes

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000')
})
