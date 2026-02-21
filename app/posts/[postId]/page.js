import React from 'react'
import { resolve } from 'styled-jsx/css';
import PostDetails  from   '@/app/Components/postDEtails'
import { Suspense } from 'react';
export default async function PostDetailsPage({ params }) {
  const {postId}= await params;
  const loadingJSX=(<div><h1>Loading...</h1></div>)
  return (
    <div>
      <h1>Post Details</h1>
<Suspense fallback={loadingJSX}>
    <PostDetails postId={postId}/>
</Suspense>

    </div>
  )
}