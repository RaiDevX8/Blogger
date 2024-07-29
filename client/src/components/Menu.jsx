import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = ({ cat }) => {
  // console.log(cat);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
// console.log(cat);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // Start loading
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
        console.log(res.data);
        setLoading(false) // Stop loading
      } catch (error) {
        setError('Error fetching posts.')
        setLoading(false) // Stop loading
      }
    }


      fetchData()

  }, [cat])

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length === 0 && !loading && !error && <p>No posts found.</p>}
      {posts.map(item => (
        <div className="post" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <button>Read more!</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
