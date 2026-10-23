import React, { useState } from 'react';
import products from '../ProductContent';
import { useCart } from '../contexts/CartContext';

const Popup = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    closePopup();
    // Simple toast/alert
    const toast = document.createElement('div');
    toast.textContent = `${selectedProduct.title} added to cart!`;
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Product Quick View</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 16).map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <button 
                onClick={() => openPopup(product)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Quick View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          />
          
          {/* Modal Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden z-50 mx-4">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl font-bold mt-2">{selectedProduct.title}</h2>
                </div>
                <button 
                  onClick={closePopup}
                  className="text-gray-400 hover:text-gray-600 text-3xl font-bold p-2 -m-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg" 
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
                      <span className="ml-4 text-sm text-gray-500 line-through">$199.99</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={closePopup}
                  className="flex-1 border-2 border-gray-300 text-gray-800 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;

