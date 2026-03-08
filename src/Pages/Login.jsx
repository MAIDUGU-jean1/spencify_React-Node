import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
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
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Login
          </button>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-600 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

