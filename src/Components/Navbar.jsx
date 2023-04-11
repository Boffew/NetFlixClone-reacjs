import React from 'react'
import {BsSearch} from 'react-icons/bs'
import SearchScreen from './SearchScreen'
import { useState } from 'react'
const Navbar = () => {
  const [searchVisibility,setSearchVisibility]= useState(false)
  const handlerSearchVisibility=()=>{setSearchVisibility(current=>!current)}
  return (
    <>
    <div className=' flex items-center justify-between absolute w-full p-4 z-[100]'>
        <h1 className='text-red-600 font-bold text-4xl'>Nextlix</h1>
        <div className='flex items-center'>
            <BsSearch color='white' className='m-5 cursor-pointer' onClick={handlerSearchVisibility}/>
            <button className='text-white pr-4 font-bold'>Login</button>
            <button className='text-black cursor-pointer px-6 py-2 font-semibold bg-red-600 rounded-md '>Sign Up</button>
        </div>
    </div>
    <SearchScreen searchVisibility={searchVisibility}/>
    </>

  )
}

export default Navbar