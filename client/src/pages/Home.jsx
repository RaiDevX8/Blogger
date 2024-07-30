import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  axios.defaults.baseURL = 'http://localhost:3000/api/'

  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/posts')
        setPosts(res.data)
      } catch (err) {
        console.error(err)
        setError('Failed to fetch posts. Please try again later.')
      }
    }

    fetchData()
  }, [])
  // console.log(posts)
  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      <div className="post">
        {posts.map(item => (
          <div className="post-item" key={item.id}>
            <Link className="link" to={`/post/${item.id}`}>
              <img
                className="image"
                src={`/uploads/${item.image}`}
                alt="content"
              />
            </Link>
            <div className="content">
              <Link className="link" to={`/post/${item.id}`}>
                <h1 className="title">{item.title}</h1>
              </Link>
              <p>{item.description}</p>
              <Link className="link" to={`/post/${item.id}`}>
                <button>read more!</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
