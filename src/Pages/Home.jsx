import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingBag, Zap, Shield, Truck } from 'lucide-react'
import products from '../ProductContent'

const imageModules = import.meta.glob('../Images/*.{png,jpg,jpeg,webp}', { eager: true });
const heroImage = imageModules['../Images/Gemini_Generated_Image_xe7rvtxe7rvtxe7r.png']?.default || '../Images/Gemini_Generated_Image_xe7rvtxe7rvtxe7r.png'

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    "All",
    "Electronics",
    "Activewear",
    "Home Office",
    "Wellness"
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const featuredProducts = filteredProducts.slice(0, 8)

  return (
    <>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-gray-900 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full blur-3xl'></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className='inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium'>
                <Zap size={16} className='text-yellow-400' />
                New Collection 2026
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Discover
                <span className="block text-gray-600">Your Style</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Explore our curated collection of premium products designed to elevate your lifestyle.
                Quality meets affordability at Spencify.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to='/products'
                  className='inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl'
                >
                  <ShoppingBag size={20} />
                  Shop Now
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Explore Categories
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Trust badges */}
              <div className='flex flex-wrap justify-center lg:justify-start gap-8 pt-6'>
                <div className='flex items-center gap-2 text-gray-600'>
                  <Shield size={20} className='text-gray-900' />
                  <span className='text-sm font-medium'>Secure Payment</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                  <Truck size={20} className='text-gray-900' />
                  <span className='text-sm font-medium'>Free Shipping</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-xl">
              <div className="relative">
                <div className='absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur-2xl'></div>
                <img
                  src={heroImage}
                  alt="Featured Products"
                  className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                      <Star className='text-green-600 fill-current' size={24} />
                    </div>
                    <div>
                      <p className='font-bold text-gray-900'>4.9 Rating</p>
                      <p className='text-sm text-gray-500'>10k+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>Our Products</h2>
            <p className='text-gray-500 mt-1'>Browse through our collection</p>
          </div>

          {/* Category Filter Buttons */}
          <div className='flex flex-wrap gap-2'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {featuredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group block"
            >
              <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600'>
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate group-hover:text-gray-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className='bg-gray-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-700'>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {filteredProducts.length > 8 && (
          <div className='text-center mt-12'>
            <Link
              to='/products'
              className='inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl'
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        )}

        {/* If filtered products is 8 or less, still show link to products page */}
        {filteredProducts.length <= 8 && (
          <div className='text-center mt-12'>
            <Link
              to='/products'
              className='inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300'
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Truck size={32} className='text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Free Shipping</h3>
              <p className='text-gray-400'>On orders over $50</p>
            </div>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Shield size={32} className='text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Secure Payment</h3>
              <p className='text-gray-400'>100% secure checkout</p>
            </div>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap size={32} className='text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Fast Delivery</h3>
              <p className='text-gray-400'>Within 2-3 business days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
