"use client"
import React from 'react'
import { useState, useEffect , useRef  } from 'react';
import Link from 'next/link'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();



   useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
      document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <nav className='h-16 px-4 bg-purple-700 flex justify-between items-center text-white'>
        <div className="logo font-bold text-2xl">
          <Link href="/">BitLinks</Link>
        </div>
        <ul className=' hidden md:flex md:justify-center md:items-center md:gap-4'>
          <Link href="/"><li className='transition-all duration-300 hover:font-bold'>Home</li></Link>
          <Link href="/shorten"><li className='transition-all duration-300 hover:font-bold'>Shorten</li></Link>
          <Link href="/contact"><li className='transition-all duration-300 hover:font-bold'>Contact Us</li></Link>
          <li className='flex gap-4'> 
            <Link href="/shorten"><button className='bg-purple-400 transition-all duration-300 hover:scale-105 shadow-lg p-3 py-1 font-bold cursor-pointer rounded-lg'>Try Now</button></Link>
            <Link target='_blank' href="https://github.com/KhurramRaja35"><button className='bg-purple-400 transition-all duration-300 hover:scale-105 shadow-lg p-3 py-1 font-bold cursor-pointer rounded-lg'>GitHub</button></Link>
          </li>
        </ul>
        <div className='md:hidden'>
          <button onClick={toggleMenu} ref={menuRef} className='text-white focus:outline-none'>
            {/* Hamburger icon */}
            
              
              
           
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
                <defs />
                <path fill="currentColor" d="M3.25,5 C3.25,4.586 3.586,4.25 4,4.25 L20,4.25 C20.414,4.25 20.75,4.586 20.75,5 C20.75,5.414 20.414,5.75 20,5.75 L4,5.75 C3.586,5.75 3.25,5.414 3.25,5 Z M3.25,12 C3.25,11.586 3.586,11.25 4,11.25 L20,11.25 C20.414,11.25 20.75,11.586 20.75,12 C20.75,12.414 20.414,12.75 20,12.75 L4,12.75 C3.586,12.75 3.25,12.414 3.25,12 Z M4,18.25 L20,18.25 C20.414,18.25 20.75,18.586 20.75,19 C20.75,19.414 20.414,19.75 20,19.75 L4,19.75 C3.586,19.75 3.25,19.414 3.25,19 C3.25,18.586 3.586,18.25 4,18.25 Z" />
              </svg>
            
          </button>
        </div>
      </nav>
      {isOpen && (
        <div ref={menuRef} className='md:hidden bg-purple-500 text-white w-60 fixed top-2 right-2 z-10 overflow-y-auto rounded-lg'>
          <ul className='flex flex-col items-center gap-4 p-4'>
          <button className='absolute top-4 left-3' onClick={toggleMenu}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
                <defs />
                <path fill="currentColor" d="M5.47,5.47 C5.763,5.177 6.237,5.177 6.53,5.47 L12,10.939 L17.47,5.47 C17.763,5.177 18.237,5.177 18.53,5.47 C18.823,5.763 18.823,6.237 18.53,6.53 L13.061,12 L18.53,17.47 C18.823,17.763 18.823,18.237 18.53,18.53 C18.237,18.823 17.763,18.823 17.47,18.53 L12,13.061 L6.53,18.53 C6.237,18.823 5.763,18.823 5.47,18.53 C5.177,18.237 5.177,17.763 5.47,17.47 L10.939,12 L5.47,6.53 C5.177,6.237 5.177,5.763 5.47,5.47 Z" />
              </svg> 
          </button>
            <Link href="/"><li>Home</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex flex-col items-center gap-4'>
              <Link href="/shorten"><button className='bg-purple-400 shadow-lg p-3 py-1 font-bold cursor-pointer rounded-lg'>Try Now</button></Link>
              <Link target='_blank' href="https://github.com/KhurramRaja35"><button className='bg-purple-400 shadow-lg p-3 py-1 font-bold cursor-pointer rounded-lg'>GitHub</button></Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
