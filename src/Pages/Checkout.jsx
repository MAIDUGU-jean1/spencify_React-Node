import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const Checkout = () => {
  const { cartItems, cartCount, totalPrice, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    clearCart()
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className='min-h-[60vh] flex flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-3xl font-bold text-gray-900 mb-3'>Order placed!</h1>
        <p className='text-gray-600 mb-8'>Thanks for trying the Spencify demo checkout.</p>
        <Link to='/products' className='bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700'>
          Continue Shopping
        </Link>
      </div>
    )
  }

  if (cartCount === 0) {
    return (
      <div className='min-h-[60vh] flex flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-2xl font-bold text-gray-900 mb-3'>Your cart is empty</h1>
        <Link to='/products' className='text-indigo-600 font-semibold hover:underline'>Browse products</Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto max-w-5xl px-4 py-12'>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>Checkout</h1>
      <p className='text-sm text-gray-600 mb-8'>Demo checkout only; no payment will be collected.</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <form onSubmit={handleSubmit} className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'>
          <h2 className='text-xl font-bold mb-6'>Shipping details</h2>
          <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='checkout-name'>Full name</label>
          <input id='checkout-name' name='name' autoComplete='name' required className='w-full border rounded-lg px-4 py-3 mb-4' />
          <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='checkout-email'>Email</label>
          <input id='checkout-email' name='email' type='email' autoComplete='email' required className='w-full border rounded-lg px-4 py-3 mb-4' />
          <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='checkout-address'>Shipping address</label>
          <textarea id='checkout-address' name='address' autoComplete='street-address' required rows='3' className='w-full border rounded-lg px-4 py-3 mb-6' />
          <button type='submit' className='w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-indigo-700 transition-colors'>
            Place Demo Order
          </button>
        </form>

        <section className='bg-gray-50 border border-gray-200 rounded-2xl p-6 h-fit'>
          <h2 className='text-xl font-bold mb-6'>Order summary</h2>
          <ul className='space-y-4 mb-6'>
            {cartItems.map((item) => (
              <li key={item.id} className='flex justify-between gap-4 text-sm'>
                <span>{item.title} <span className='text-gray-500'>× {item.quantity}</span></span>
                <span className='font-medium'>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className='border-t pt-4 flex justify-between font-bold'>
            <span>Total ({cartCount} items)</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link to='/cart' className='block mt-6 text-center text-indigo-600 hover:underline'>Return to cart</Link>
        </section>
      </div>
    </div>
  )
}

export default Checkout
