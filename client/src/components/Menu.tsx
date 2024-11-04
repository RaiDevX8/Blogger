import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MenuProps, Post } from '../types'

const Menu:React.FC<MenuProps> = ({ cat }) => {
  // console.log(cat);
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)
// console.log(cat);
useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await axios.get<Post[]>(`/posts/?cat=${cat}`)
      setPosts(res.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching posts.')
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [cat])

return (
  <div className="menu">
    <h1>Other posts you may like</h1>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {!loading && !error && posts.length === 0 && <p>No posts found.</p>}

    {posts.map(item => (
      <div className="post" key={item.id}>
        <img src={`/uploads/${item.image}`} alt={item.title} />
        <h2>{item.title}</h2>
        <button>Read more!</button>
      </div>
    ))}
  </div>
)
}

export default Menu