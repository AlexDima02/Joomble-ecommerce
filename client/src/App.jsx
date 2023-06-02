import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import FeaturedProduct from './pages/FeaturedProduct/FeaturedProduct';
import CategoryPage from './pages/Categories/CategoryPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  
  const [toggleCart, setToggleCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      navigate('/')
    }

  }, []);

  return (
    <>
      <Navbar setToggleCart={setToggleCart} toggleCart={toggleCart}/>
      <ShoppingCart toggleCart={toggleCart} setToggleCart={setToggleCart}/>
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
