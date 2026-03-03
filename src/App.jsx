// ...existing code...
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ProductDetails  from './Pages/ProductDetails'
import Cartpage from './Pages/Cartpage'

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <h1 className='text-4xl'>Welcome to Tech</h1>
    </>
  )
}

export default App