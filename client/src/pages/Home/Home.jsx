import React from 'react'
import Slider from './components/ImageSlider/Slider';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen'>
        <Slider />
        <div className='max-w-[1400px] m-auto border-red-700 border my-10'>
          <section>
            <ProductCarousel />
          </section>
        </div>
        <section>
          <div className='w-full h-full object-cover overflow-hidden'>
            <img src="./assets/Screenshot 2023-05-19 205442.png" alt="" className='w-full h-full'/>
          </div>
        </section>
        <div className='max-w-[1400px] m-auto border-red-700 border my-10'>
        <section>
            <div className='flex flex-col place-content-center'>
              <div className='text-center w-full font-bold text-2xl'>
                <h1>New collection</h1>
              </div>
              <div className='w-full flex place-content-center mt-5'>
                <button className='bg-button-color text-white py-3 px-5 mr-20'><Link to='/categories' relative="path">SHOP BY MEN</Link></button>
                <button className='bg-button-color text-white py-3 px-5'><Link to='/categories' relative="path">SHOP BY WOMEN</Link></button>
              </div>
            </div>
            <ProductCarousel />
        </section>
        </div>
    </div>
  )
}

export default Home;