import React from 'react'

export default async function ShowArticlePage({ params }) {

  const resolvedParams = await params;

  return (
    <div>
      <h1>show article</h1>
      <h1>{resolvedParams.title}</h1>
    </div>
  );
}
