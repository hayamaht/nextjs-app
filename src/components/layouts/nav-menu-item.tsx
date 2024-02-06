'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { buttonVariants } from '../ui/button';

export default function MavMenuItem({ 
  item 
}: {
  item: { title: string, path: string }
}) {
  const pathname = usePathname();

  return (
    <Link href={item.path}
      className={cn(
        buttonVariants({variant:'ghost'}),
        pathname === item.path 
          ? 'bg-primary' 
          : ''
      )}
    >
      {item.title}
    </Link>
  )
}
