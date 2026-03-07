import React from 'react'
import bgImage from '../Images/Gemini_Generated_Image_xe7rvtxe7rvtxe7r.png'
import ProductGrid from '../Components/ProductGrid'
import ImageGallery from '../Components/ImageGallery'


const Home = () => {
// productsContent.js

 const categories = [
  "Electronics",
  "Activewear", 
  "Home Office", 
  "Wellness"
];
 
  return (
   <>
    {/* hero background */}
    <div
      className='bg bg-cover bg-center h-64'
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>

    {/* categories and products */}
    <div className='container mx-auto px-0 mt-6'>
      <div className='flex gap-4 mb-6'>
        {categories.map((cat) => (
          <button
            className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer'
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* show product cards first */}
      <ProductGrid />

      {/* then render a gallery of every file in src/Images */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">All Image Assets</h2>
        <ImageGallery />
      </div>
    </div>
   </>
  )
}

export default Home