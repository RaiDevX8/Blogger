import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/AuthContext'
import DOMPurify from 'dompurify'

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const postId = location.pathname.split('/')[2]
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const getText = html => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        {/* Ensure the correct path */}
        <img src={`/uploads/${post?.image}`} alt={post.title} />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt={post.username} />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date_posted).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <span>edit</span>
              </Link>
              <span onClick={handleDelete}>delete</span>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></p>
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default Single
