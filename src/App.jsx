import React from 'react'
import Header from './components/Header'
import Products from './components/Products';

import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';


const App = () => {
  return (
    <>
   
    <Header/>
      <Routes>
        <Route path="/" element={  <Products/> }/>
        <Route path="/cart" element={<Cart/> }/>
      </Routes>
    </>
  )
}

export default App