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


// Endpoint 1 --> iteme filtrate1
// Endpoint 2 --> iteme filtrate2

// ... tot asa pana la 5 endpint-uri chemate la click
// Trebuie verificat daca acel state contine itemele pe care vrem sa le introducem, daca exista deja sterge acel item din array
// Fiecare raspuns de la endpoint va fi trimis catre un array care tine loc de state
// si care ne a afisa produsele