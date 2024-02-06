import React from 'react'
import Link from 'next/link'
import { navbarMenu } from '@/lib/menu'
import { ModeToggle } from '../mode-toggle'
import Logo from './logo'
import Sidebar from './sidebar'

export default function Navbar() {
  return (
    <div className='border-b border-border bg-background/90 shadow-md'>
      <div className='container mx-auto drop-shadow-md'>
        <div className='flex items-center justify-between h-14'>
          <div className='flex-none '>
            <Logo />
          </div>
          <div className='hidden sm:flex justify-between space-x-4'>
            {navbarMenu.map((m, i) => (
              <Link key={i} href={m.path}
                className=''
              >
                {m.title}
              </Link>
            ))}
          </div>
          <div className='flex items-center space-x-2'>
            <ModeToggle />
            <div className='block sm:hidden'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
