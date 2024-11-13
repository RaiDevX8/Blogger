import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from '../types';
import { AuthContext } from '../context/AuthContext';

axios.defaults.baseURL = 'http://localhost:3000/api';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { currentUser } = useContext(AuthContext); // Get currentUser from AuthContext
  const location = useLocation();
  const navigate = useNavigate();

  const getCategoryFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('cat');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = getCategoryFromUrl();
        const endpoint = category ? `/posts/?cat=${category}` : '/posts';
        const res = await axios.get<Post[]>(endpoint);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch posts. Please try again later.');
      }
    };

    fetchData();
  }, [location.search]);

  const handleCardClick = (postId: number) => {
    if (currentUser) {
      navigate(`/post/${postId}`);
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      {posts.length === 0 && !error && <div className="no-results">No posts found for this category.</div>}
      <div className="post">
        {posts.map(item => (
          <div
            className="post-item"
            key={item.id}
            onClick={() => handleCardClick(item.id)} // Add onClick to the entire card
            style={{ cursor: 'pointer' }} // Style to indicate it's clickable
          >
            <img className="image" src={`/uploads/${item.image}`} alt="content" />
            <div className="content">
              <h1 className="title">{item.title}</h1>
              <p>{item.description}</p>
              <button onClick={(e) => { e.stopPropagation(); handleCardClick(item.id); }}>read more!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
