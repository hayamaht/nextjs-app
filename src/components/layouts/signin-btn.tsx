import React from 'react'
import { Button } from '../ui/button'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'

export default function SigninButton() {
  return (
    <Button asChild>
      <Link href={'/login'}>
        <LogInIcon className='h-4 w-4 font-bold' />
      </Link>
    </Button>
  )
}
