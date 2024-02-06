import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
      
      </SheetContent>
    </Sheet>
  )
}
