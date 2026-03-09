import React from 'react'
import products from '../ProductContent'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="block">
            <div className='shadow-lg rounded-md cursor-pointer overflow-hidden hover:shadow-xl transition-shadow'>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium truncate">{product.title}</h3>
                <p className="text-gray-600 text-xs mt-1">{product.category}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList

