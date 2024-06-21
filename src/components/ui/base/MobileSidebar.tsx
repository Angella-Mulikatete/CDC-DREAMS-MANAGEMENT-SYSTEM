import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Sidebarlinks from './Sidebarlinks'


const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild><Menu className='lg:hidden cursor-pointer'/></SheetTrigger>
        <SheetContent side="left">
         <Sidebarlinks/>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileSidebar
