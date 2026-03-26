import { ShoppingCart, User, LogOut, User as UserIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
// import '../App.css'
import '../../src/App.css'

const Navbar = ({ isGuest = true }) => {
  const { cartCount } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)
  const handleUserClick = () => setIsOpen(!isOpen)

  console.log('Hello state ', isGuest)

  return (
    <>
      <header className='bg-white shadow-sm sticky top-0 z-50'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex items-center justify-between h-16'>
            <Link to='/' className='flex items-center gap-2'>
              <span className='text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                SPENCIFY
              </span>
            </Link>

            <nav className='hidden md:flex items-center gap-8'>
              <Link
                to='/'
                className='text-gray-600 hover:text-indigo-600 transition-colors font-medium'
              >
                Home
              </Link>
              <Link
                to='/products'
                className='text-gray-600 hover:text-indigo-600 transition-colors font-medium'
              >
                Market Place
              </Link>
              <Link
                to='/cart'
                className='text-gray-600 hover:text-indigo-600 transition-colors font-medium'
              >
                Cart
              </Link>
            </nav>

            {/* Right Side - Auth Buttons or User Profile */}
            <div className='flex items-center gap-4'>
              {isGuest ? (
                // Guest Mode - Show Login and Sign Up buttons
                <div className='hidden md:flex items-center gap-3'>
                  <Link
                    to='/login'
                    className='px-4 py-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors'
                  >
                    Login
                  </Link>
                  <Link
                    to='/signup'
                    className='px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors'
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                // Logged In Mode Show User Profile dropdown
                <div className='relative'>
                  <button
                    onClick={handleUserClick}
                    aria-label='User menu'
                    className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                  >
                    <div className='w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center'>
                      <UserIcon size={18} className='text-indigo-600' />
                    </div>
                    <span className='text-gray-700 font-medium hidden sm:inline'>My Account</span>
                  </button>

                  {isOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50'>
                      <div className='px-4 py-3 bg-gray-50 border-b border-gray-100'>
                        <p className='text-sm font-semibold text-gray-800'>Welcome User</p>
                        <p className='text-xs text-gray-500'>user@example.com</p>
                      </div>
                      <div className='py-1'>
                        <Link
                          to='/profile'
                          className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors'
                          onClick={() => setIsOpen(false)}
                        >
                          <UserIcon size={16} />
                          Profile
                        </Link>
                        <Link
                          to='/orders'
                          className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors'
                          onClick={() => setIsOpen(false)}
                        >
                          <ShoppingCart size={16} />
                          My Orders
                        </Link>
                        <button
                          className='w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors'
                          onClick={() => setIsOpen(false)}
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <Link
                to='/cart'
                className='p-2 text-gray-600 hover:text-indigo-600 transition-colors relative'
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
