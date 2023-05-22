import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './carousel.css';


function ProductCarousel() {

    const [slideIndex, setSlideIndex] = useState(0);
   
    console.log(slideIndex)
    const slider = useRef(null);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
 
    const [data, setData] = useState([
        {
        
                image: './assets/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg',
                productName: `Men's Super shoes`,
                color: 'Cyan',
                oldPrice: 184,
                newPrice: 84
        },
        {
        
            image: './assets/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg',
            productName: `Men's Super shoes`,
            color: 'Cyan',
            oldPrice: 184,
            newPrice: 84
        },
        {
        
            image: './assets/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg',
            productName: `Men's Super shoes`,
            color: 'Cyan',
            oldPrice: 184,
            newPrice: 84
        },
        {
        
            image: './assets/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg',
            productName: `Men's Super shoes`,
            color: 'Cyan',
            oldPrice: 184,
            newPrice: 84
        },
        {
        
            image: './assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
            productName: `Men's Running shoes`,
            color: 'Yellow',
            oldPrice: 154,
            newPrice: 54
        },
        {

            image: './assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
            productName: `Men's Running shoes`,
            color: 'Yellow',
            oldPrice: 154,
            newPrice: 54
        },
        {

            image: './assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
            productName: `Men's Running shoes`,
            color: 'Yellow',
            oldPrice: 154,
            newPrice: 54
        },
        {

            image: './assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg',
            productName: `Men's Running shoes`,
            color: 'Yellow',
            oldPrice: 154,
            newPrice: 54
        }
    ])
    
    console.log(data[0])

    // const onPrevSlide = () => {

    //     let isFirstSlide = 0;
    //     let newSlide = slideIndex === isFirstSlide ? data.length - 1 : slideIndex - 1;
    //     setSlideIndex(newSlide);

    // }

    // const onNextSlide = () => {

    
    //     let isLastSlide = slideIndex === data.length - 1;
    //     let newSlide = isLastSlide ? 0 : slideIndex + 1;
    //     setSlideIndex(newSlide);

    // }

    // const slideBack = () => {

    //     if(left === true){
    //         setInterval(() => {
    //             setLeft(false)
    //         }, 1500);
    //         clearInterval()
    //     }

    //     if(right === true){

    //         setInterval(() => {
    //             setRight(false)
    //         }, 1500);
    //         clearInterval()

    //     }
        
    // }
   
  return (
    <div className='mb-10 w-full'>
        {/* <div className='min-h-full flex flex-col place-content-center justify-center'>
            <div className='bg-button-color text-white w-fit p-2 cursor-pointer' onClick={onPrevSlide}><span>Left</span></div>
        </div> */}
        <div id='carousel' className={`flex w-full place-content-between transition-all`}>
               
        </div>
        {/* <div className='min-h-full flex flex-col place-content-center justify-center'>
            <div className='bg-button-color text-white w-fit p-2 cursor-pointer' onClick={() => {onNextSlide()}}><span>Right</span></div>
        </div> */}
        <div className='absolute top-[50%] left-0 z-50 p-2 bg-button-color rounded-md text-white'>
            <button onClick={() => slider?.current?.slickPrev()}><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
            
        </div>
         <Slider className='relative' ref={slider} {...settings}>
                    {data?.map((product) => {
                        return (
                            <div className='flex flex-col shadow-xl bg-white cursor-pointer transition-all place-content-between md:hover:scale-[120%] md:m-16'>
                                <div className='w-full h-auto object-cover overflow-hidden'>
                                    <img className='w-full h-72' src={product.image} alt="" />
                                </div>
                                <div className='px-4 my-3'>
                                    <h2>{product.productName}</h2>
                                    <p>{product.color}</p>
                                </div>
                                <div className='flex place-content-between px-4 mb-3'>
                                    <p>{product.newPrice}$</p>
                                    <span>{product.oldPrice}$</span>
                                </div>
                            </div>
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