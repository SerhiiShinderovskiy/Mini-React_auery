import React from 'react';
import './App.css';
import { usePosts } from './hook/usePosts';
import "./styles/styles.css";
import { useCreatePost } from './hook/useCreatePost';

function App() {
  const {data, isLoading} = usePosts()
  const {mutate, isPending} = useCreatePost()

  return (
    <>
      <h1>React Query</h1>
      <h2>Posts</h2>

      <button
        onClick={() => {
          mutate({
            title: 'New title',
            body: 'New body',
            userId: 1,
          })
        }}
      >
        {isPending ? "Loading..." : "Create"}
      </button>

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