import React from 'react'
import { resolve } from 'styled-jsx/css';
export default async function PostDetails({ postId }) {
await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    },2000)
})
  const response = await fetch(
    `https://dummyjson.com/posts/${postId}`,
    {
      next: {
        revalidate: 120
      }
    }
  );

  const post = await response.json();

  return (
    <div>

      <div    style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}>
        <h2>{post.title}</h2>
        <hr/>
        <p>{post.body}</p>
        <p>{post.tags}</p>
    
      </div>
    </div>
  )
}