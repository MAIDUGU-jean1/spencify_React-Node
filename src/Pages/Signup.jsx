import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotice('Account creation is ready for an authentication service, which is not configured in this demo.')
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='name'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              autoComplete='name'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='new-password'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Create a password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors'
          >
            Sign Up
          </button>
        </form>
        {notice && <p role='status' className='mt-4 text-center text-sm text-gray-600'>{notice}</p>}
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-gray-900 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
