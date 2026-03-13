import { motion } from 'framer-motion'
import { ShoppingCart, User } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
// import '../App.css'
import '../../src/App.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleUserClick = () => setIsOpen(!isOpen)
  const { cartCount } = useCart()
  const [animateCart, setAnimateCart] = useState(false)

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true)
      const timer = setTimeout(() => setAnimateCart(false), 600)
      return () => clearTimeout(timer)
    }
  }, [cartCount])

  return (
    <>
      <header className='bg-white shadow-md'>
        <div className='py-4 container mx-auto px-4 md:px-2 flex justify-between items-center'>
          <ul className='flex gap-4'>
            <li>
              <Link to='/' className='text-gray-700 transition-colors'>Home</Link>
            </li>
            <li>
              <Link to='/products' className='text-gray-700 transition-colors'>Products</Link>
            </li>
            <li>
              <Link to='/cart' className='text-gray-700 transition-colors'>Cart</Link>
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
                    to='/signup'   
                    className='block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded mb-1'
                    onClick={() => setIsOpen(false)}
                  >
                    Signup
                  </Link>
                  <Link
                    to='/login'
                    className='block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded'
                    onClick={() => setIsOpen(false)}
                  >
                    Login
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
              <Link to='/'>
                <span className='text-gray-800 font-bold text-xl uppercase'>SPENCIFY</span>
              </Link>
            </div>
          </div>
          
          <Link to='/cart' className='relative text-gray-800'>
            <motion.div
              animate={animateCart ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.6 }}
              className={ cartCount > 0 ? "btn-clicked cursor-pointer bg-gray-100 px-3 py-2 rounded-full" :'cursor-pointer bg-gray-100 px-3 py-2 rounded-full'}
            >
              <ShoppingCart size={54} />
            </motion.div>
            {cartCount > 0 && (
              <motion.span
                key={`badge-${cartCount}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-lg border-2 border-white'
              >
                {cartCount}
                
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

