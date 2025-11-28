import React from 'react'
import Sets from '../../assets/sets.svg'
import { UserRound, 
  Search,
  SlidersHorizontal,
  Heart,
  Bell,
  Settings,
  Menu,
  X  } from "lucide-react";

  import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    //1 wrapper
    <div className='w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50'>

      {/* left section logo */}
        <div className='flex items-center gap-3'>
          <h1 className='text-2xl font-bold text-[#3563E9]'>Sayara</h1>
        </div>

        {/* pc searchbar */}
        <div className='hidden md:flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 w-[350px] transition-all'>
          <Search size={20} className='text-[#596780]'/>
          <input type="text" placeholder='Search something here..' className='bg-transparent outline-none text-sm w-full' />
          <SlidersHorizontal size={20} className='text-[#596780] cursor-pointer'/>
        </div>

        {/* pc icons */}
        <div className='hidden md:flex items-center gap-4'>
          <button className='h-10 w-10 rounded-full border-gray-200 flex items-center justify-center border hover:bg-gray-50 transition'>
            <Heart size={20} className='text-[#596780] fill-[#596780]'/>
          </button>
          <button className='h-10 w-10 rounded-full border-gray-200 flex items-center justify-center border hover:bg-gray-50 transition'>
            <Bell size={20} className='text-[#596780] fill-[#596780]'/>
          </button>
          <button className='h-10 w-10 rounded-full border-gray-200 flex items-center justify-center border hover:bg-gray-50 transition'>
            <img src={Sets} alt="settings"/>
          </button>

          {/* profile icon */}
          <button className='h-10 w-10 rounded-full border-gray-200 flex items-center justify-center border hover:bg-gray-50 transition'>
            <UserRound size={25} className='text-[#596780] fill-[#596780]'/>
          </button>
        </div>

        {/*mobile menu button*/}
        <button 
          className='md:hidden p-2 rounded-lg border border-gray-200'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? < X size={22} /> : <Menu className='text-[#596780]' size={22}/>}
        </button>

        {/*dropdowm mobile*/}
         <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg p-6 md:hidden transform transition-all duration-300 ${
          isOpen ? " translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
        >
        {/*search mobile*/}
        <div className='flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3'>
          <Search size={18} className='text-[#596780]'/>
          <input 
            type="text"
            placeholder='Search something here...'
            className='bg-transparent outline-none text-sm w-full'
          />
          <SlidersHorizontal size={18} className='text-[#596780]'/>
        </div>

        {/*mobile icons*/}
        <br />
        <div className='flex flex-col gap-3'>
          <button className='flex items-center gap-3 border-transparent text-[#596780] py-4 px-4 rounded-full'>
             <Heart size={20} className='text-[#596780] fill-[#596780]'/> Favorites
          </button>
          <button className='flex items-center gap-3 text-[#596780] py-6 px-4 rounded-lg'>
             <Bell size={20} className='text-[#596780] fill-[#596780]' /> Notifications
          </button>
          <button className='flex items-center gap-3 text-[#596780] py-6 px-4 rounded-lg'>
             <img src={Sets} alt="settings"/>Settings
          </button>
          <button className='flex items-center gap-3 text-[#596780] py-6 px-4 rounded-lg'>
             <UserRound size={20} className='text-[#596780] fill-[#596780]' /> Your Profile
          </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar