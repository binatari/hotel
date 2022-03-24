import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='justify-between flex items-center py-4 px-12 container mx-auto' >
      <Link href={'/'}>
        <img src={require('../public/assets/Alphamsa Logo.png').default.src} alt="" className='max-h-[4rem] h-[4rem]' />
        </Link>
        <ul className=' hidden md:flex '>
            <Link href='/apartments'>
            <li className=' px-6 py-2'>
            Our Apartments
            </li>
            </Link>
            <Link href='/about'>
            <li className=' px-6 py-2'>
             About Us
            </li>
            </Link>
            <Link href='/apartments'>
            <li className='bg-black px-6 py-2 text-white'>
             <button className='bg-black'>
                Book Now 
             </button>
            </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav