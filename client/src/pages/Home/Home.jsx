import React, { useEffect, useState } from 'react'
import Slider from './components/ImageSlider/Slider';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import { Link } from 'react-router-dom';
import axios from 'axios'
import FetchData from '../../components/FetchComponent/FetchData';



function Home() {
  

  const { error, data, fetchData } = FetchData();
  const { error1, data: newProducts, fetchData: fetchNewProducts } = FetchData();

  useEffect(() => {

    fetchData("/products?populate=*");
    fetchNewProducts("/products?filter[variations][title][$eq]=New&populate=*")

  }, []);
  const [products, setProducts] = useState([]);
  console.log(newProducts)

  return (
    <div className='min-h-screen'>
        <section>
          <Slider />
        </section>
        <div className='max-w-full m-auto my-10'>
          <section className='relative'>
            <div className='w-full text-center mb-5'>
              <h1 className='font-bold text-2xl'>Our favourties</h1>
            </div>
            <ProductCarousel products={data}/>
          </section>
        </div>
        <section>
          <div className='w-full h-full object-cover overflow-hidden'>
            <img src="./public/img/Screenshot 2023-05-19 205442.png" alt="" className='w-full h-full'/>
          </div>
        </section>
        <div className='max-w-full m-auto my-10'>
          <section className='relative'>
              <div className='flex flex-col place-content-center mb-10'>
                <div className='text-center w-full font-bold text-2xl'>
                  <h1>New collection</h1>
                </div>
                <div className='w-full flex place-content-center mt-5'>
                  <button className='bg-button-color text-white py-3 px-5 mr-20'><Link to='/categories' relative="path">SHOP BY MEN</Link></button>
                  <button className='bg-button-color text-white py-3 px-5'><Link to='/categories' relative="path">SHOP BY WOMEN</Link></button>
                </div>
              </div>
              <ProductCarousel products={newProducts}/>
          </section>
        </div>
    </div>
  )
}

export default Home;