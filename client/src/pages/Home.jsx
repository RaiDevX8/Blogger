import React from 'react'
import { Link } from 'react-router-dom'
import '../style.scss' // Import SCSS module

const post = [
  {
    id: 1,
    title: 'First Object',
    description: 'Description of the first object.',
    image:
      'https://media.istockphoto.com/id/1151307397/vector/flat-cartoon-character.jpg?s=1024x1024&w=is&k=20&c=qBROYpbloa21JgZODjhjUlgo8SXTXliHfeoO1YrKqkg=',
  },
  {
    id: 2,
    title: 'Second Object',
    description: 'Description of the second object.',
    image:
      'https://media.istockphoto.com/id/1151307397/vector/flat-cartoon-character.jpg?s=1024x1024&w=is&k=20&c=qBROYpbloa21JgZODjhjUlgo8SXTXliHfeoO1YrKqkg=',
  },
  {
    id: 3,
    title: 'Third Object',
    description: 'Description of the third object.',
    image:
      'https://media.istockphoto.com/id/1330868115/vector/the-concept-of-a-copywriter-creating-a-blog-the-idea-of-writing-texts-creativity-and.webp?s=1024x1024&w=is&k=20&c=3jWtujreWJGP4MvLqn7RhKAqbvNnJCZwzd3FTbG0Vc4=',
  },
  {
    id: 11,
    title: 'First Object',
    description: 'Description of the first object.',
    image:
      'https://media.istockphoto.com/id/1330868115/vector/the-concept-of-a-copywriter-creating-a-blog-the-idea-of-writing-texts-creativity-and.webp?s=1024x1024&w=is&k=20&c=3jWtujreWJGP4MvLqn7RhKAqbvNnJCZwzd3FTbG0Vc4=',
  },
  {
    id: 12,
    title: 'Second Object',
    description: 'Description of the second object.',
    image:
      'https://media.istockphoto.com/id/1330868115/vector/the-concept-of-a-copywriter-creating-a-blog-the-idea-of-writing-texts-creativity-and.webp?s=1024x1024&w=is&k=20&c=3jWtujreWJGP4MvLqn7RhKAqbvNnJCZwzd3FTbG0Vc4=',
  },
  {
    id: 13,
    title: 'Third Object',
    description: 'Description of the third object.',
    image:
      'https://media.istockphoto.com/id/1330868115/vector/the-concept-of-a-copywriter-creating-a-blog-the-idea-of-writing-texts-creativity-and.webp?s=1024x1024&w=is&k=20&c=3jWtujreWJGP4MvLqn7RhKAqbvNnJCZwzd3FTbG0Vc4=',
  },
]
const Home = () => {
  return (
    <div className="home">
      <div className="post">
        {post.map(item => (
          <div className="post-item" key={item.id}>
            <Link className="link" to={`/post/${item.id}`}>
              <img className="image" src={item.image} alt="content" />
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
