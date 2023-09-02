import React, { useRef } from 'react'
import Slider from 'react-slick';

function ImageCarousel({product}) {
    
    const slider = useRef(null);
    const productImg1 = product?.attributes?.product_image1?.data?.attributes?.url;
    const productImg2 = product?.attributes?.product_image2?.data?.attributes?.url;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
    <div className='relative block w-full md:hidden'>
                <div className='absolute top-[50%] translate-y-[-50%] left-0 p-2 bg-button-color z-50 rounded-md text-white'>
                    <button onClick={() => slider?.current?.slickPrev()}><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
                </div>
                <Slider className='relative' ref={slider} {...settings}>
                    <div className='w-full h-[500px]'>
                        <img className='w-full h-full' src={productImg1 ?? ''} alt="" />
                    </div>
                    <div className='w-[500px] h-[500px]'>
                        <img className='w-full h-full' src={productImg2 ?? ''} alt="" />
                    </div>
                </Slider>
                <div className='absolute top-[50%] translate-y-[-50%] right-0 bg-button-color p-2 rounded-md text-white'>
                        <button onClick={() => slider?.current?.slickNext()}><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                </div>
                
    </div>
  )
}

export default ImageCarousel;