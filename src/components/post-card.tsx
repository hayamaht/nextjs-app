import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface Props {
  post: {
    image?: string;
    createdAt: string;
    title: string;
    slug: string;
    path: string;
  }
}

export default function PostCard(
  // { post }: Props
) {
  return (
    <Card className='max-w-52 '>
      <div className='relative h-40 '>
        <Image src='/post.jpg' alt='' fill priority sizes='300px'
          className='object-cover rounded-t-lg'
        />
      </div>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Desc</CardDescription>
      </CardHeader>
      <CardContent>
        {/* { post.image && (
          <div className='relative'>
            <Image src={post.image} alt='' fill
              className=''
            />
          </div>
        )} */}
      </CardContent>
      <CardFooter>
        <Link href={'/'}
          className={cn(
            buttonVariants(),
            'w-full'
          )}
        >Read More</Link>
      </CardFooter>
    </Card>
  )
}
