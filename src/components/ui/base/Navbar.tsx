import Image from 'next/image'
import React from 'react'
import { Button } from '../button'
import { BellIcon } from 'lucide-react'
import SearchInput from './SearchInput'
import ProfileMenu from './ProfileMenu'
import MobileSidebar from './MobileSidebar'
import { CustomAdmin } from '@/app/api/auth/[...nextauth]/authOptions'

const Navbar = ({ admin }: { admin: CustomAdmin }) => {
  return (
    <nav className="flex justify-between items-center p-2 border-b">
      <MobileSidebar />
      <Image src="" width={50} height={50} alt="logo" />
      <SearchInput />
      <div className="flex space-x-3 items-center">
        <Button size="icon" variant="secondary">
          <BellIcon className="w-5 h-5" />
        </Button>
        <ProfileMenu admin={admin}/>
      </div>
    </nav>
  );
};

export default Navbar
