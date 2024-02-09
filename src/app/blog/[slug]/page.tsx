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

  //const post = await getPost(slug);

  return {
    title: 'Title Titke',//post.title,
    description: 'lorme asd asd df adg a f',//post.desc,
  };
}

export default function BlogSlugPage() {
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
        <h2 className='text-4xl font-bold py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, delectus </h2>
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
        <div className='relative w-full h-96 '>
          <Image src={'/post.jpg'} alt='' fill priority sizes='500px'
            className='object-cover rounded-sm'
          />
        </div>
        <div className='my-8 space-y-4'>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, delectus eum tempore ratione laboriosam facilis molestias possimus accusamus cum ea blanditiis accusantium architecto facere atque rem recusandae iusto necessitatibus vitae!
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, incidunt ipsam. Ea, quis facilis! Libero sequi officia enim maiores accusantium magnam molestiae. Omnis, optio rem beatae alias sunt maiores voluptatem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci temporibus corporis quod officia repellendus deserunt maiores provident nulla mollitia ab unde, eligendi tempore ducimus totam ratione debitis voluptate dolore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum incidunt itaque quaerat, quisquam iste, fugiat quidem vitae laborum quo voluptatibus doloremque nam! Fuga modi similique qui unde mollitia aliquid eaque!
          </p>
        </div>
      </div>
    </section>
  )
}
