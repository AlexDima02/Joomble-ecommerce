import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import FeaturedProduct from './pages/FeaturedProduct/FeaturedProduct';
import CategoryPage from './pages/Categories/CategoryPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import FilterModal from './components/FilterPopUp/FilterModal';
import SideBar from './components/SideBar/SideBar';

function App() {
  
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const navigate = useNavigate();

  const [urlGender, setUrlGender] = useState([]);
  const [urlCollection, setCollectionUrl] = useState([]);
  

  useEffect(() => {

    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      navigate('/')
    }

  }, []);

  return (
    <>
      <Navbar setToggleSideBar={setToggleSideBar} toggleSideBar={toggleSideBar} setUrlGender={setUrlGender} setCollectionUrl={setCollectionUrl} setToggleCart={setToggleCart} toggleCart={toggleCart}/>
      <ShoppingCart toggleCart={toggleCart} setToggleCart={setToggleCart}/>
      <SideBar setUrlGender={setUrlGender} setCollectionUrl={setCollectionUrl} toggleSideBar={toggleSideBar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<FeaturedProduct />} />
        <Route path="/categories" element={<CategoryPage urlGender={urlGender} urlCollection={urlCollection} setToggleFilter={setToggleFilter} toggleFilter={toggleFilter}/>} />
        <Route path="/categories/:id" element={<CategoryPage urlGender={urlGender} urlCollection={urlCollection} setToggleFilter={setToggleFilter} toggleFilter={toggleFilter}/>} />
        <Route path="/categories/:collection" element={<CategoryPage setToggleFilter={setToggleFilter} toggleFilter={toggleFilter}/>} />
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