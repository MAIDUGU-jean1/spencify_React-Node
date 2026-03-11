import React from 'react'
import ProductGrid from '../Components/ProductGrid'


const imageModules = import.meta.glob('../Images/*.{png,jpg,jpeg,webp}', { eager: true });
const heroImage = imageModules['../Images/Gemini_Generated_Image_xe7rvtxe7rvtxe7r.png']?.default || '../Images/Gemini_Generated_Image_xe7rvtxe7rvtxe7r.png'

const Home = () => {
 const categories = [
  "Electronics", 
  "Activewear", 
  "Home Office", 
  "Wellness"
];
 
  return (
   <>
    <div
      className='bg bg-cover bg-center min-h-[70vh]'
    >
      <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 py-16 bg-white/90 min-h-[70vh]">
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                New Arrival 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-black leading-[1.1]">
                Spencify <br /> 
                <span className="text-gray-400 italic">Your Style.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Elevate your daily routine with a marketplace that values 
                minimalism and quality. At Spencify, we bridge the gap 
                between essential goods and effortless shopping.
              </p>
            </div>

        
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:gap-6 mt-4">
              <button className="bg-black text-white px-10 py-4 font-semibold hover:bg-gray-800 transition-all duration-300">
                Start Shopping
              </button>
              <button className="border border-black text-black px-10 py-4 font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Explore Categories
              </button>
            </div>
          </div>

      
          <div className="relative h-[50vh] md:h-full bg-gray-200 overflow-hidden mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
            <img 
              src={heroImage}
              alt="Minimalist E-commerce Spencify"
              className="w-full h-full object-cover  rounded-lg shadow-lg-[70px_70px_140px_-35px_rgba(0,0,0,0.5)]"
            />
       
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>
    </div>

    {/* categories and products */}
    <div className='container mx-auto px-4 mt-12 mb-8'>
      <div className='flex flex-wrap gap-3 mb-8'>
        {categories.map((cat) => (
          <button
            className='bg-gray-200 py-3 px-6 rounded-lg text-black font-medium active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer shadow-sm'
            key={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* show product cards first */}
      <ProductGrid />
    </div>
   </>
  )
}

export default Home

