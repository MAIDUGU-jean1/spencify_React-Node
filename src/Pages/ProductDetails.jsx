import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../ProductContent'
import { useCart } from '../contexts/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    window.setTimeout(() => setIsAdded(false), 1500)
  }

  if (!product) {
    return (
      <div className='container mx-auto px-4 py-8 text-center'>
        <h2 className='text-2xl font-bold'>Product not found</h2>
        <Link to='/products' className='bg-gray-900 hover:underline mt-4 inline-block'>
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link to='/products' className='text-gray-700 hover:underline mb-6 inline-block'>
        ← Back to Products
      </Link>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className='flex flex-col justify-center'>
          <span className='text-sm text-gray-500 uppercase tracking-wide mb-2'>
            {product.category}
          </span>
          <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
          <p className='text-2xl font-bold text-gray-900 mb-4'>
            ${product.price.toFixed(2)}
          </p>
          <p className='text-gray-600 mb-6'>{product.description}</p>
          
          <button 
            type='button'
            onClick={handleAddToCart}
            className='bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-8 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all w-fit'
          >
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>
          {isAdded && <p role='status' className='mt-3 text-green-700'>Added {product.title} to your cart.</p>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
