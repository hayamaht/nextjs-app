import React from 'react'
import { navbarMenu } from '@/lib/menu'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='flex'>
      <div>LOGO</div>
      <div className='flex'>
        {navbarMenu.map((m, i) => (
          <Link key={i} href={m.path}>
            {m.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
