"use client"
import { Bell, Menu, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux'
import { setIsSidebarCollapsed } from '@/state'

const Navbar = () => {

  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(
    (state)=>state.global.isSidebarCollapsed
);

const toggleSideBar = () =>{
  dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));

}
  return (
    <div className='flex justify-between items-center w-full mb-7'>
      <div className='flex justify-between items-center gap-5'>
        <button className='px-2 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={toggleSideBar}
        >
          <Menu className='w-4 h-4' />
        </button>
      

      <div className='relative'>
        <input type="search" placeholder='Start type to Search'
          className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-200 bg-white rounded-lg
            focus:outline-none focus:border-blue-500'
        />
        <div className="absolute inset-y-0 pl-3 flex left-0 items-center pointer-events-none">
          <Search className='text-gray-500' size={20} />
        </div>
      </div>
      </div>
      <div className="flex justify-between items-center gap-5 ">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => { }}>
              <Sun className=' cursor-pointer text-gray-500' size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className='cursor-pointer text-gray-500' size={24} />
            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs 
              font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              3
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 max-3' />
          <div className="flex items-center cursor-pointer">
            <div className='w-9 h-9'>
              image
            </div>
            <span className='font-semibold'>Sattva Doshi</span>
          </div>
        </div>
        <Link href={'/settings'}>
        <Settings className='cursor-pointer text-gray-500'/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar