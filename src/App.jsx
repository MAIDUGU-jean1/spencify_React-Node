// ...existing code...
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ProductDetails  from './Pages/ProductDetails'
import Cartpage from './Pages/Cartpage'
import ProductList from './Pages/ProductList'


const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/src/Components/ProductGrid.jsx'/>
      </Routes>

    </>
  )
}

export default App