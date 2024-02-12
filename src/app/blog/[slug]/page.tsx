import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { getPost } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon, BackpackIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const generateMetadata = async ({ 
  params 
}: { 
  params: { slug: string }
}) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function BlogSlugPage({ 
  params 
}: { 
  params: { slug: string }
}) {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <section className='container mx-auto p-10'>
      <div>
        <Link href={'/blog'} 
          className={cn(
            buttonVariants({variant: 'link'}),
            'flex space-x-2 justify-start'
          )}
        >
          <ArrowLeftIcon />
          <span>Blog</span>
        </Link>
      </div>
      <div>
        <h2 className='text-4xl font-bold py-4'>
          { post.title }
        </h2>
        <div className='flex items-center space-x-5 p-5'>
          <Avatar className='ring-2 ring-primary ring-offset-2 ring-offset-background'>
            <AvatarImage src='/people.jpg' />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
          <p className='flex-1'>Doe Jone</p>
          <div className='justify-items-end text-sm font-serif'>
            2024-02-23 13:23:12
          </div>
        </div>
        { post.img ? (
          <div className='relative w-full h-96 '>
            <Image src={post.img} alt='' fill priority sizes='500px'
              className='object-cover rounded-sm'
            />
          </div>
        ) : null }
        <div className='my-8 space-y-4'>
          { post.desc }
        </div>
      </div>
    </section>
  )
}
