import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useCart } from '../contexts/CartContext'
import { ShoppingBag } from 'lucide-react'
import "../../src/App.css"

const ProductCart = ({ product }) => {
  if (!product) return null

  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [count, setCount] = useState(0)

  return (
<div className="block hover:shadow-xl transition-shadow">
      <div className='shadow-lg rounded-md cursor-pointer overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-sm font-medium mb-1">{product.title}</h3>
          <p className="text-gray-600 text-xs mb-2 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 mb-3">${product.price}</p>
          
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addToCart(product)
                setIsAdded(true)
                setCount((prev) => prev + 1)
                setTimeout(() => setIsAdded(false), 1500)
              }}
              className= "flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1" 
            >
              {isAdded ? (
                <>
                  ✓ Added!
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Add to Cart
                </>
              )}
            </button>
            <Link
              to={`/products/${product.id}`}
              className="px-4 py-2 text-sm border border-gray-300 hover:bg-gray-50 rounded-md transition flex items-center justify-center whitespace-nowrap"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart