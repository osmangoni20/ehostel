import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
        <a className='mr-5 hover:text-gray-900' href='/'>
          Home
        </a>
        <a className='mr-5 hover:text-gray-900' href='/'>
          About
        </a>
        <a className='mr-5 hover:text-gray-900' href='/'>
          Contact
        </a>
        <a className='mr-5 hover:text-gray-900' href='/dashboard'>
          Dashboard
        </a>
      </nav>
    </>
  )
}

export default Navbar
