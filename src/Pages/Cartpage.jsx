import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { Trash2, Minus, Plus } from 'lucide-react'

const Cartpage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart()

  if (cartCount === 0) {
    return (
      <div className='min-h-[60vh] flex flex-col items-center justify-center py-12 px-4'>
        <div className='text-center'>
          <div className='w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
            <ShoppingCart className='w-12 h-12 text-gray-400' />
          </div>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Your cart is empty</h2>
          <p className='text-gray-600 mb-8 max-w-md'>Looks like you haven't added anything to your cart yet.</p>
          <Link
            to='/products'
            className='bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2'
          >
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Shopping Cart</h1>
          <div className='text-sm text-gray-600'>
            {cartCount} items • ${totalPrice.toFixed(2)}
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2'>
            {cartItems.map((item) => (
              <div key={item.id} className='bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-lg mb-1 line-clamp-2'>{item.title}</h3>
                    <p className='text-gray-600 mb-4'>${item.price.toFixed(2)}</p>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center bg-gray-100 rounded-lg p-1'>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className='p-2 hover:bg-gray-200 rounded text-gray-600 hover:text-gray-800 transition-colors'
                        >
                          <Minus size={16} />
                        </button>
                        <span className='px-4 py-1 font-bold text-lg min-w-[3rem] text-center'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className='p-2 hover:bg-gray-200 rounded text-gray-600 hover:text-gray-800 transition-colors'
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-500 hover:text-red-700 font-medium flex items-center gap-1 text-sm p-1 hover:bg-red-50 rounded transition-colors'
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-sm sticky top-8 h-fit'>
            <h3 className='text-xl font-bold mb-6'>Order Summary</h3>
            <div className='space-y-4 mb-6'>
              <div className='flex justify-between text-lg'>
                <span>Total ({cartCount} items):</span>
                <span className='font-bold text-2xl'>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to='/checkout'
              className='w-full bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors block text-center shadow-lg hover:shadow-xl'
            >
              Proceed to Checkout
            </Link>
            <div className='mt-4 pt-4 border-t text-sm text-gray-600 text-center'>
              <Link to='/products' className='hover:text-indigo-600 transition-colors'>
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartpage

