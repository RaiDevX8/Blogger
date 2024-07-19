import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/AuthContext'

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const currentUser = useContext(AuthContext)

  const fetchData = async () => {
    try {
      console.log(`Fetching data for postId: ${postId}`)
      const res = await axios.get(`/posts/${postId}`)
      setPost(res.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (postId) {
      fetchData()
    }
  }, [postId])

  return (
    <div className="single">
      <div className="content">
        <img src={post?.image} alt="" />
        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1151307397/vector/flat-cartoon-character.jpg?s=1024x1024&w=is&k=20&c=qBROYpbloa21JgZODjhjUlgo8SXTXliHfeoO1YrKqkg="
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date_posted).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <h3>Edit</h3>
              </Link>
              <Link>
                <h3>Delete</h3>
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
