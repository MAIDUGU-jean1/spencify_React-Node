import React from 'react'
import { Link } from "react-router-dom"

const ProductCart = ({ product }) => {
  if (!product) return null

  return (
<Link to={`/products/${product.id}`} className="block">
      <div className='shadow-lg rounded-md cursor-pointer overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-2">
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="text-gray-600 text-xs">${product.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCart