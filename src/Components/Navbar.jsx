import { ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleUserClick = () => setIsOpen(!isOpen)

  return (
    <>
      <header className='bg-white shadow-md'>
        <div className='py-4 container mx-auto px-4 md:px-2 flex justify-between items-center'>
          <ul className='flex gap-4'>
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
          </ul>

          <div className='flex items-center gap-4'>
            <div className='relative'>
              <button
                onClick={handleUserClick}
                aria-label='User menu'
                className='bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300 transition'
              >
                <User size={24} />
              </button>

              {isOpen && (
                <div className='absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg p-3 z-50'>
                  <div className='text-sm font-semibold text-gray-700 mb-2'>My Account</div>
                  <Link
                    to='/account'
                    className='block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded mb-1'
                    onClick={() => setIsOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link
                    to='/signup'
                    className='block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded'
                    onClick={() => setIsOpen(false)}
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Logo bar below the header, SPENCIFY and ShoppingCart side-by-side */}
      <div className='bg-gray-100'>
        <div className='container mx-auto px-4 md:px-2 flex items-center justify-between py-3'>
          <div className='flex items-center gap-3'>
            <div className='bg-gray-200 px-4 py-2 rounded'>
              <span className='text-gray-800 font-bold text-xl uppercase'>SPENCIFY</span>
            </div>
          </div>
   <form action="">
    <input type="text" placeholder='search product' className='bg-zinc-50 rounded-md border border-zinc-200  outline-0 py-2 px-55 w-full block' />
   </form>
          <Link to='/cart' className='text-gray-800'>
            <ShoppingCart size={54} className='cursor-pointer hg-gray-100 px-3 py-2 rounded-full'/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
