import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/data';
import React from 'react'

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className='container mx-auto p-10'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
        <PostCard 
          // post={post} 
        />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      {/* {posts.map((post) => (
        <div className='' key={post.id}>
          <PostCard post={post} />
        </div>
      ))} */}
    </div>
  )
}
