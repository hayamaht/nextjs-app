import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/data';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog desc"
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className='container mx-auto p-10'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
        {posts.map((post) => (
          <div className='' key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}
