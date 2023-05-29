import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardComponent from '../../../../components/CardComponent/CardComponent';
// import './carousel.css';


function ProductCarousel({products}) {

    
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
    const slider = useRef(null);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
 
     
  return (
    <div className='mb-10 w-full'>
        <div className='absolute top-[50%] left-0 z-50 p-2 bg-button-color rounded-md text-white'>
            <button onClick={() => slider?.current?.slickPrev()}><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
        </div>
         <Slider className='relative' ref={slider} {...settings}>
                    {products?.data.data?.map((product) => {
                        return (
                            <CardComponent product={product}/>
                        )
                    })}
                </Slider>
                <div className='absolute top-[50%] right-0 z-50 bg-button-color p-2 rounded-md text-white'>
                        <button onClick={() => slider?.current?.slickNext()}><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                </div>
                
    </div>
  )
}


export default ProductCarousel;