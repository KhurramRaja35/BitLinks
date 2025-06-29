import React from 'react'

const Footer = () => {
  return (
   <footer className=' h-20 md:h-16 px-4 bg-purple-700 flex flex-col md:flex-row items-center md:justify-between md:items-center text-white'>
        <div className="logo font-bold text-2xl">
            BitLinks
        </div>
        <p>
            Simplify your links. Track with ease.
        </p>
        <div>
            © 2025 Bitlinks
        </div>
   </footer>
  )
}

export default Footer
