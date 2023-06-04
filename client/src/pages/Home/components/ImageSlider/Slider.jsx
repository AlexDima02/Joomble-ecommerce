import React from 'react'
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className='min-w-full'>
        <div className='w-full h-full overflow-hidden relative'>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
            <img src="./public/img/isaac-wendland-7DCZgKyp8vw-unsplash.jpg" alt="" className='w-full h-full'/>
            <div className='absolute w-full bottom-[20%] left-0 flex place-content-center font-medium'>
                <button className='bg-button-color text-white py-5 px-5 md:py-5 md:px-10 mr-20'><Link to='/categories' relative="path">SHOP BY MEN</Link></button>
                <button className='bg-button-color text-white py-5 px-5 md:py-5 md:px-10'><Link to='/categories' relative="path">SHOP BY WOMEN</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Slider;