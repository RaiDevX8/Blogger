import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.title || '')
  const [title, setTitle] = useState(state?.desc || '')
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || '')

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await axios.post('http://localhost:3000/api/upload', formData) // Correct the URL here
      return res.data.filename
    } catch (err) {
      console.error('File upload error: ', err)
    }
  }

  const handleSubmit = async () => {
    // Ensure that content is not empty or null
    if (!title || !content || !date_posted || !user_id) {
      console.error('Title, content, date_posted, and user_id are required.')
      return
    }

    try {
      const response = await axios.post('http://localhost:3000/api/posts', {
        title,
        content,
        image, // Optional field
        cat, // Optional field
       
        user_id,
      })

      console.log(response.data)
    } catch (error) {
      console.error('Post submission error: ', error)
    }
  }


  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title} // Ensure input value is controlled
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
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
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
