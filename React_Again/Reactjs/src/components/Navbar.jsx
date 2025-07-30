import React from 'react'

const 
 Navbar = () => {
  return (
    <nav className='bg-emerald-950 flex py-5 px-10 item-center justify-between'>
        <h1 className='text-4xl '>Gaurav</h1>
        <div className='flex gap-10 items-center'>
          <h4 className='text-2xl'>Home</h4>
          <h4 className='text-2xl'>contact us</h4>
          <h4 className='text-2xl'>services</h4>
          <h4 className='text-2xl'>Account</h4>
        </div>
      </nav>
  )
}

export default Navbar
