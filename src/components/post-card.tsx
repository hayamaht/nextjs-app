import React, { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface Props {
  post: {
    image?: string;
    img?: string;
    createdAt: string;
    title: string;
    slug: string;
    path: string;
  }
}

export default function PostCard(
  { post }: Props
) {
  return (
    <Card className='shadow-md'>
      {post.img && <div className='relative h-40 '>
        <Suspense fallback='loading'>
          <Image src={post.img} alt='post image' fill priority sizes='300px'
            className='object-cover rounded-t-lg'
          />
        </Suspense>
      </div>}
      <CardHeader>
        <CardTitle>{ post.title }</CardTitle>
        <CardDescription>
          {/* { post.createdAt.toString() } */}
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
      </CardContent> */}
      <CardFooter>
        <Link href={`/blog/${post.slug}`}
          className={cn(
            buttonVariants(),
            'w-full'
          )}
        >Read More</Link>
      </CardFooter>
    </Card>
  )
}
