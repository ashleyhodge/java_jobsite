import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('api/allPosts')
            .then(response => response.json())
            .then(data => {
            console.log(data)
                setPosts(data);
                setLoading(false);
            })
    }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>JUG List</h2>
          {posts.map(post =>
            <div key={post.id}>
              {post.profile}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
