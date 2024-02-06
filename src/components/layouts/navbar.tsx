import React from 'react'
import { navbarMenu } from '@/lib/menu'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
  return (
    <div className='border-b border-border bg-background/90 shadow-md'>
      <div className='container mx-auto drop-shadow-md'>
        <div className='flex items-center justify-between h-14'>
          <div className='flex-none text-2xl font-roboto font-extrabold'>LOGO</div>
          <div className='flex justify-between space-x-2'>
            {navbarMenu.map((m, i) => (
              <Link key={i} href={m.path}
                className=''
              >
                {m.title}
              </Link>
            ))}
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
