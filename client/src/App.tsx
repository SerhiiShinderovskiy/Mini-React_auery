import React from 'react';
import './App.css';
import { usePosts } from './hook/usePosts';
import "./styles/styles.css";

function App() {
  const {data, isLoading} = usePosts()

  return (
    <>
      <h1>React Query</h1>
      <h2>Posts</h2>

      {isLoading
        ? 'Loading...'
        : data?.length
        ? data.map((post: any) => <div 
          className='post-item' 
          key={post.id}
        >
          <div>
          <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>)
        : 'Not found'}
    </>
  );
}

export default App;