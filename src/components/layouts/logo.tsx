import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

export default function Logo() {
  return (
    <Link href={'/'}
      className={cn(
        buttonVariants({ variant:'ghost', size:'lg'}),
        'text-2xl font-roboto font-extrabold',
      )}
    >
      LOGO
    </Link>
  )
}
