import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Cartpage from './Pages/Cartpage'
import ProductList from './Pages/ProductList'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


const App = () => {
  // This would typically come from your authentication state
  const isGuest = false

  return (
    <>
      <Navbar isGuest={isGuest} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

