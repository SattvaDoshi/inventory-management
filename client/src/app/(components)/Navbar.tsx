"use client"
import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        <div className='fle justify-between items-center gap-5'>
            <button className='px-2 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
            onClick={()=>{}}
            >
                <Menu className='w-4 h-4'/>
            </button>
        </div>
        <div className='relative'>
            <input type="search" placeholder='Start type to Search' 
            className='pl-10'
            />
        </div>
    </div>
  )
}

export default Navbar