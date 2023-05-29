import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FeaturedProduct from './pages/FeaturedProduct/FeaturedProduct';
import CategoryPage from './pages/Categories/CategoryPage';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<FeaturedProduct />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
