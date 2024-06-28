import React from 'react'
import { Link } from 'react-router-dom'

const post = [
  {
    id: 1,
    title: 'First Object',
    description: 'Description of the first object.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Second Object',
    description: 'Description of the second object.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'Third Object',
    description: 'Description of the third object.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 11,
    title: 'First Object',
    description: 'Description of the first object.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 12,
    title: 'Second Object',
    description: 'Description of the second object.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 13,
    title: 'Third Object',
    description: 'Description of the third object.',
    image: 'https://picsum.photos/200/300',
  },
]

const Home = () => {
  return (
    <div className="home">
      <div className="post">
        {post.map(item => (
          <div className="post" key={item.id}>
            <img src={item.image} alt="content" />
            <div className="content">
              <Link className='link' to={`/post/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
                <p>{item.description}</p>
                <button>read more!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
