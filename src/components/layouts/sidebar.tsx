import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import { navbarMenu } from '@/lib/menu'
import Link from 'next/link'
import Logo from './logo'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-80'>
        <SheetHeader className='my-5'>
          <Logo />
          <div className='border-b border-border' />
        </SheetHeader>
        <div className='my-4 flex flex-col space-y-4'>
          {navbarMenu.map((m, i) => (
            <Link key={i} href={m.path}
              className={cn(
                buttonVariants({ variant:'ghost', size:'lg'}),
                'hover:underline hover:underline-offset-2'
              )}
            >
              {m.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
