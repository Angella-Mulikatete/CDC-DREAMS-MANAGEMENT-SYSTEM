import Link from 'next/link'
import React from 'react'
import UserAvatar from '../UserAvatar'
import { BarChart, Flame, LogOut, Search, Settings } from 'lucide-react'
import Sidebarlinks from './Sidebarlinks'

const Sidebar = () => {
  return (
    <div className="hidden lg:block w-[150px] border-r p-4 h-full">
      <Sidebarlinks/>
    </div>
  );
}

export default Sidebar
