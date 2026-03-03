import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='py-4 shadow-md'>
        <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>

          <div className='flex gap-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>

            <li>
              <Link to='/faqs'>FAQs</Link>
            </li>

            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/signup'>Signup</Link>
               <Link to='/account' className='ml-2'>My Account</Link>
            </li>
          </div>
        </ul>

      </div>

    </header>
  )
}

export default Navbar