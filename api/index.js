import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js' // Adjust the path as necessary

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  })
)
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000')
})
