import React, { useState } from 'react'
import { FaBolt } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

export default function Card() {
    const [theme, setTheme] = useState('light');
  return (
    <div className={`max-w-sm mx-auto mt-10 p-5 ${theme==='dark'? 'bg-white':'bg-black'} rounded-xl shadow-lg hover:scale-105 transition`}>
        <div className='flex items-center gap-2'>
            <FaBolt className='text-gray-500'/>
            <h2 className='font-bold text-lg'>Learn TailwindCSS</h2>
        </div>
        <p className='text-gray-600 text-sm mt-2'>
            Learn Spacing, Colors,React Icons elements and hobver Efeects.
            <FaPerson/>
        </p>
        <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-750'>Get Started</button>
      
    </div>
  )
}
