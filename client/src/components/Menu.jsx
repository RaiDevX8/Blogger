import React from 'react'

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
const Menu = () => {
  return (
    <div className="menu">
      <h1>other post you may like</h1>
    {post.map((item,index)=>
    {
      return(
        <div className="post" key={item.id}>
          <img src={item.image} alt="image" />
          <h2>{item.title}</h2>
          <button>read more!</button>
        </div>
      )
    })}
    </div>
  )
}

export default Menu
