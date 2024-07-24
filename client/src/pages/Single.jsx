import axios from 'axios'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import { AuthContext } from '../context/AuthContext'

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const { currentUser } = useContext(AuthContext)
const navigate =useNavigate();
  const fetchData = async () => {
    try {
      console.log(`Fetching data for postId: ${postId}`)
      const res = await axios.get(`/posts/${postId}`, {
        withCredentials: true,
      }) // Ensure cookies are sent
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

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`, { withCredentials: true }) // Ensure cookies are sent
      navigate('/')
    } catch (error) {
      console.error('Delete failed:', error)
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={post?.image} alt="" />
        <div className="user">
          <img src={post?.userImg} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date_posted).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <h3>Edit</h3>
              </Link>
              <Link>
                <h3 onClick={handleDelete}>Delete</h3>
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
      <Menu category={post.cat} />
    </div>
  )
}

export default Single
