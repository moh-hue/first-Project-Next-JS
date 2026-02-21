import React from 'react'
import Link from 'next/link'





export default function articales() {
  return (
    <div><h1>Artical Pages</h1>
    
    <Link href="/posts">
    <button>Take me to the posts page</button>
    </Link>
    
    
    </div>
  )
}
