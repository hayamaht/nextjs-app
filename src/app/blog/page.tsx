import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/data';
import React from 'react'

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className='container mx-auto p-10'>
      <PostCard 
        // post={post} 
      />
      {/* {posts.map((post) => (
        <div className='' key={post.id}>
          <PostCard post={post} />
        </div>
      ))} */}
    </div>
  )
}
