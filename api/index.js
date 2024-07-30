import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
// import pos from '../client/uploads/'
const app = express()

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  })
)
app.use(cookieParser())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'../client/uploads/') // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname) // Ensure unique filenames
  },
})

const upload = multer({ storage })

// Handle file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res
      .status(200)
      .json({ message: 'Image has been uploaded', filename: req.file.filename })
  } else {
    res.status(400).json({ message: 'No file uploaded' })
  }
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000')
})
