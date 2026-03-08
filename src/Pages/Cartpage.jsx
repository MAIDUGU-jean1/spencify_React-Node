import React from 'react'
import { Link } from 'react-router-dom'

const Cartpage = () => {
  // Placeholder cart - you can add cart functionality later
  const cartItems = []

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-600 text-lg mb-4'>Your cart is empty</p>
          <Link 
            to='/products' 
            className='inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            {/* Cart items will go here */}
          </div>
          <div className='bg-gray-100 p-6 rounded-lg h-fit'>
            <h2 className='text-xl font-bold mb-4'>Order Summary</h2>
            <div className='flex justify-between mb-2'>
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className='border-t pt-4 mt-4 flex justify-between font-bold'>
              <span>Total</span>
              <span>$0.00</span>
            </div>
            <button className='w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cartpage

