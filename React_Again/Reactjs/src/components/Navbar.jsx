import React from 'react'
import { Link } from 'react-router-dom'

const 
 Navbar = () => {
  
  return (
    <nav className='bg-emerald-950 flex py-5 px-10 item-center justify-between'>
        <h2 className='text-4xl '>Gaurav <input type="text" className='text-black bg-white'/></h2>
        <div className='flex gap-10 items-center text-lg underline'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
          {/* <a href='/' className='text-2xl'>Home</a>
          <a href='/contact' className='text-2xl'>Contact us</a>
          <a href='/product' className='text-2xl'>Product</a>
          <a href='/about' className='text-2xl'>About</a> */}
        </div>
      </nav>
  )
}

export default Navbar
