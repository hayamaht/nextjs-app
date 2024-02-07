import { Button } from '@/components/ui/button'
import { BackpackIcon, CircleOffIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='border rounded-lg p-5 space-y-8 bg-card max-w-sm'>
        <h2 className='text-3xl text-center font-bold'>
          <span>Not Found</span>
        </h2>
        
        <p className='flex space-x-4'>
          <CircleOffIcon className='flex-none'/>
          <span>Sorry, the page you are looking for does not exist.</span>
        </p>
        <Button asChild className='w-full' >
          <Link href={'/'}>Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
