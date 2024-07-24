import { db } from '../db.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM post WHERE cat=?'
    : 'SELECT * FROM post'

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err)
    return res.status(200).json(data)
  })
}

export const getPost = (req, res) => {
  const q = `
    SELECT p.id, u.username, p.title, p.content, p.image, p.date_posted
    FROM user u
    JOIN post p ON u.id = p.user_id
    WHERE p.id = ?
  `

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data[0])
  })
}

export const addPost = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json('Not authenticated!')

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    const q =
      'INSERT INTO post(`title`, `content`, `image`, `cat`, `date_posted`, `user_id`) VALUES (?)'

    const values = [
      req.body.title,
      req.body.content,
      req.body.image,
      req.body.cat,
      req.body.date_posted,
      userInfo.id,
    ]

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err)
      return res.json('Post has been created.')
    })
  })
}

export const deletePost = (req, res) => {
  const postId = req.params.id
  const q = 'DELETE FROM post WHERE `id` = ?'

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.affectedRows === 0)
      return res
        .status(404)
        .json('Post not found or you do not have permission to delete it.')
    return res.json('Post has been deleted!')
  })
}


export const updatePost = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json('Not authenticated!')

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    const postId = req.params.id
    const q =
      'UPDATE post SET `title`=?, `content`=?, `image`=?, `cat`=? WHERE `id` = ? AND `user_id` = ?'

    const values = [
      req.body.title,
      req.body.content,
      req.body.image,
      req.body.cat,
    ]

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err)
      return res.json('Post has been updated.')
    })
  })
}
