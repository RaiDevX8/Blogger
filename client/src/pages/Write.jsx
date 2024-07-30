import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.content || '')
  const [title, setTitle] = useState(state?.title || '')
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || '')
  const navigate = useNavigate()
  const user_id = 1 // Replace with actual user_id, e.g., from auth context/session

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await axios.post(
        'http://localhost:3000/api/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      return res.data.filename
    } catch (err) {
      console.error('File upload error: ', err)
      return null
    }
  }

  const handleSubmit = async () => {
    const date_posted = moment().format('YYYY-MM-DD HH:mm:ss')

    if (!title || !value || !cat || !user_id) {
      console.error(
        'Title, content, category, user_id, and date_posted are required.'
      )
      return
    }

    try {
      const image = file ? await upload() : null
      const postData = {
        title,
        content: value,
        image,
        cat,
        user_id,
        date_posted,
      }

      // console.log('Submitting post:', postData) // Log the payload

      const response = await axios.post(
        'http://localhost:3000/api/posts',
        postData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      // console.log('Post submitted successfully:', response.data)
      navigate('/') // Redirect to the posts page after successful submission
    } catch (error) {
      console.error(
        'Post submission error:',
        error.response ? error.response.data : error.message
      )
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type="file"
            id="file"
            onChange={e => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button onClick={() => console.log('Save as a draft')}>
              Save as a draft
            </button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {['art', 'science', 'technology', 'cinema', 'design', 'food'].map(
            category => (
              <div className="cat" key={category}>
                <input
                  type="radio"
                  checked={cat === category}
                  name="cat"
                  value={category}
                  id={category}
                  onChange={e => setCat(e.target.value)}
                />
                <label htmlFor={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Write
