import React from 'react'
import Link from 'next/link'
import { navbarMenu } from '@/lib/menu'
import { ModeToggle } from '../mode-toggle'
import Logo from './logo'
import Sidebar from './sidebar'
import NavMenuItem from './nav-menu-item'
import SigninButton from './signin-btn'
import { Button } from '../ui/button'

export default function Navbar() {
  const session = false;
  const isAdmin = true;

  return (
    <div className='border-b border-border bg-background/50 shadow-md sticky top-0 backdrop-blur'>
      <div className='container mx-auto '>
        <div className='flex items-center justify-between h-14'>
          <div className='flex-none '>
            <Logo />
          </div>
          <div className='hidden sm:flex items-center justify-between space-x-4'>
            {navbarMenu.map((m, i) => (
              <NavMenuItem key={i} item={m}/>
            ))}           
          </div>
          <div className='flex items-center space-x-2'>
            <ModeToggle />          
            
            <div className='block sm:hidden'>
              <Sidebar />
            </div>
            { !session && <SigninButton /> }
            {session && (
              <>
                <Button className='bg-lime-600'>Logout</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
