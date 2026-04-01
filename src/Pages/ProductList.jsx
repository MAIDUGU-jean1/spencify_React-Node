import React, { useState, useMemo } from 'react'
import products from '../ProductContent'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, ShoppingBag, Heart, Grid, List, ArrowUpDown } from 'lucide-react'

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    "All",
    "Electronics",
    "Activewear",
    "Home Office",
    "Wellness"
  ]

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'All'
      ? products
      : products.filter(p => p.category === activeCategory)

    // Search filter
    if (searchQuery) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price)
      case 'name':
        return [...result].sort((a, b) => a.title.localeCompare(b.title))
      default:
        return result
    }
  }, [activeCategory, searchQuery, sortBy])

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      {/* Welcome Hero Section */}
      <div className='relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-gray-900'></div>
        </div>
        <div className='absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl'></div>

        <div className='container mx-auto px-4 py-16 md:py-20 relative'>
          <div className='max-w-3xl mx-auto text-center space-y-4'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20'>
              <ShoppingBag size={16} className='text-emerald-400' />
              Welcome to Spencify Marketplace
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight'>
              Discover Amazing
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>
                Products
              </span>
            </h1>

            <p className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'>
              Welcome to our marketplace! Browse through our curated collection of premium products.
              Quality, style, and affordability - all in one place.
            </p>

            {/* Stats */}
            <div className='flex flex-wrap justify-center gap-8 pt-6'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white'>{products.length}+</div>
                <div className='text-sm text-gray-400'>Products</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white'>{categories.length - 1}</div>
                <div className='text-sm text-gray-400'>Categories</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white'>4.9</div>
                <div className='text-sm text-gray-400'>Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg viewBox='0 0 1440 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z' fill='white' />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-8'>
        {/* Filters & Search Bar */}
        <div className='bg-white rounded-2xl shadow-lg p-4 mb-8 border border-gray-100'>
          <div className='flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 w-full lg:max-w-md'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
              <input
                type='text'
                placeholder='Search products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all'
              />
            </div>

            {/* Sort & View */}
            <div className='flex items-center gap-3 w-full lg:w-auto'>
              <div className='relative flex-1 lg:flex-none'>
                <ArrowUpDown className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={18} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='pl-10 pr-8 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 appearance-none cursor-pointer text-sm font-medium'
                >
                  <option value='default'>Default</option>
                  <option value='price-low'>Price: Low to High</option>
                  <option value='price-high'>Price: High to Low</option>
                  <option value='name'>Name: A-Z</option>
                </select>
              </div>

              <div className='flex items-center gap-1 bg-gray-100 rounded-xl p-1'>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className='flex items-center justify-between mb-6'>
          <p className='text-gray-600'>
            Showing <span className='font-semibold text-gray-900'>{filteredProducts.length}</span> products
            {activeCategory !== 'All' && (
              <span> in <span className='font-semibold text-gray-900'>{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }>
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="block group">
                <div className={viewMode === 'grid'
                  ? 'bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1'
                  : 'flex bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
                }>
                  {/* Image */}
                  <div className={viewMode === 'grid'
                    ? 'relative overflow-hidden'
                    : 'w-48 h-48 flex-shrink-0 relative overflow-hidden'
                  }>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={viewMode === 'grid'
                        ? 'w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500'
                        : 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      }
                    />
                    {/* Overlay buttons */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100'>
                      <button className='bg-white p-3 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
                        <Heart size={18} />
                      </button>
                      <button className='bg-white p-3 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                    {/* Category badge */}
                    <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700'>
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={viewMode === 'grid' ? 'p-4' : 'p-4 flex-1 flex flex-col justify-between'}>
                    <div>
                      <h3 className='font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2'>
                        {product.title}
                      </h3>
                      <div className='flex items-center gap-1 mt-2'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                          />
                        ))}
                        <span className='text-xs text-gray-500 ml-1'>(4.0)</span>
                      </div>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                      <p className='text-xl font-bold text-gray-900'>
                        ${product.price.toFixed(2)}
                      </p>
                      <button className='bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors'>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className='text-center py-16'>
            <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Search size={40} className='text-gray-400' />
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>No products found</h3>
            <p className='text-gray-500 mb-6'>Try adjusting your search or filter criteria</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
              className='bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors'
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
