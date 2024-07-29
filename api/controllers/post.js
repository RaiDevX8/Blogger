import { db } from '../db.js'

// Get all posts or posts by category
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM post WHERE cat=?'
    : 'SELECT * FROM post'

  db.query(q, [req.query.cat], (err, data) => {
    if (err) {
      console.error('Database query error: ', err)
      return res.status(500).json(err)
    }
    return res.status(200).json(data)
  })
}

// Get a single post by ID
export const getPost = (req, res) => {
  const q = `
    SELECT p.id, u.username, p.title, p.content, p.image, p.date_posted, p.cat
    FROM user u
    JOIN post p ON u.id = p.user_id
    WHERE p.id = ?
  `

  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      console.error('Database query error: ', err)
      return res.status(500).json(err)
    }
    return res.status(200).json(data[0])
  })
}
export const addPost = (req, res) => {
  const { title, content, image, cat, date_posted, user_id } = req.body

  // Validate that required fields are not null or undefined
  if (!title || !content || !date_posted || !user_id) {
    return res
      .status(400)
      .json('Title, content, date_posted, and user_id are required.')
  }

  const q =
    'INSERT INTO post (title, content, image, cat, date_posted, user_id) VALUES (?)'
  const values = [title, content, image || '', cat || '', date_posted, user_id]

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Database query error: ', err)
      return res.status(500).json(err)
    }
    return res.status(201).json('Post has been created.')
  })
}


// Delete a post by ID
export const deletePost = (req, res) => {
  const postId = req.params.id
  const userId = req.body.user_id // Assuming user_id is sent in the request body

  const q = 'DELETE FROM post WHERE id = ? AND user_id = ?'

  db.query(q, [postId, userId], (err, data) => {
    if (err) {
      console.error('Database query error: ', err)
      return res.status(500).json(err)
    }
    if (data.affectedRows === 0)
      return res
        .status(404)
        .json('Post not found or you do not have permission to delete it.')
    return res.json('Post has been deleted.')
  })
}

// Update a post by ID
export const updatePost = (req, res) => {
  const postId = req.params.id
  const userId = req.body.user_id // Assuming user_id is sent in the request body

  const q =
    'UPDATE post SET title = ?, content = ?, image = ?, cat = ? WHERE id = ? AND user_id = ?'
  const values = [
    req.body.title,
    req.body.content,
    req.body.image,
    req.body.cat,
    postId,
    userId,
  ]

  db.query(q, values, (err, data) => {
    if (err) {
      console.error('Database query error: ', err)
      return res.status(500).json(err)
    }
    if (data.affectedRows === 0)
      return res
        .status(404)
        .json('Post not found or you do not have permission to update it.')
    return res.json('Post has been updated.')
  })
}

