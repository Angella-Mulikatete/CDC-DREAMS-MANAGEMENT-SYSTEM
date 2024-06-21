import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className='relative  hidden lg:bloc'>
       <input  className='w-full lg:w-[500px] h-12 py-2 pl-10  outline-none bg-muted rounded-2xl' placeholder='search here...'/>
       <Search className='absolute left-2 top-3 h-4 w-4'/>
    </div>
  )
}

export default SearchInput
