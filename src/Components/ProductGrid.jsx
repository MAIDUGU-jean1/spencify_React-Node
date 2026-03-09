import React from 'react'
import products from "../ProductContent"
import ProductCart from "./ProductCart" // component that renders individual product cards

const ProductGrid = () => {
  return (
     <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            products.slice(0, 11).map((product) => (
                <ProductCart key={product.id} product={product} />
            ))
        }
     </div>
  )
}

export default ProductGrid