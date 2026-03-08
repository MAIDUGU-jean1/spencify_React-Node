import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-12'>
      {/* Newsletter Section - Centered */}
      <div className='container mx-auto px-4 py-8'>
        <div className="text-center mb-6">
          <h2 className='text-2xl font-bold mb-2'>Subscribe to our newsletter</h2>
          <p className='text-gray-400'>Get the latest updates and offers directly to your inbox</p>
        </div>

        <form action="" className='relative flex items-center max-w-md mx-auto'>
            <input 
              type="text"  
              placeholder='Enter your Email' 
              className='py-3 px-4 rounded shadow-md w-full pr-24 bg-white text-gray-900'
            />
            <button className='bg-gray-200 py-3 px-4 rounded absolute right-1 top-1/2 -translate-y-1/2 text-gray-900 font-medium hover:bg-gray-300 transition-colors'>
              Submit
            </button>
        </form>
      </div>

      {/* Main Footer Content - 4 Columns Grid */}
      <div className="bg-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Company/About */}
            <div>
              <h3 className='text-xl font-bold mb-4'>About Us</h3>
              <ul className='space-y-2'>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Our Story</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Careers</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Press</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Blog</a></li>
              </ul>
            </div>

            {/* Column 2: Pages */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Pages</h3>
              <ul className='space-y-2'>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Home</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Products</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Cart</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Login</a></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Categories</h3>
              <ul className='space-y-2'>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Electronics</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Activewear</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Home Office</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Wellness</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Contact</h3>
              <ul className='space-y-2'>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Support</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>FAQ</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Shipping</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Returns</a></li>
              </ul>
            </div>
          
          </div>

          {/* Social Media Icons - Below the grid */}
          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-gray-700">
            {/* Facebook Icon */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            
            {/* YouTube Icon */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 transition-colors cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className='text-gray-400'>© 2026 SPENCER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

