import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { getUser } from '@/lib/data'

export default async function PostUser({ 
  userId 
}: {
  userId: string
}) {
  const user = await getUser(userId);

  return (
    <div className='flex items-center space-x-4'>
      <Avatar className='ring-2 ring-primary ring-offset-2 ring-offset-background'>
        <AvatarImage src={user.img} className='object-cover' />
        <AvatarFallback>Y</AvatarFallback>
      </Avatar>
      <p className='flex-1'>{user.username}</p>
    </div>
  )
}
