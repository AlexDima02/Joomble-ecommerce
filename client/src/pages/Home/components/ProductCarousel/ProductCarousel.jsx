import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCarousel() {

    const [slideIndex, setSlideIndex] = useState(0);
   
    console.log(slideIndex)

 
    const [data, setData] = useState([
        [{
        
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
        }],
        [{
        
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
        }]
    ])
    
    console.log(data[0])

    const onPrevSlide = () => {

        let isFirstSlide = 0;
        let newSlide = slideIndex === isFirstSlide ? data.length - 1 : slideIndex - 1;
        setSlideIndex(newSlide);

    }

    const onNextSlide = () => {

    
        let isLastSlide = slideIndex === data.length - 1;
        let newSlide = isLastSlide ? 0 : slideIndex + 1;
        setSlideIndex(newSlide);

    }

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
    <div className='flex place-content-between w-full my-10'>
        <div className='min-h-full flex flex-col place-content-center justify-center'>
            <div className='bg-button-color text-white w-fit p-2 cursor-pointer' onClick={onPrevSlide}><span>Left</span></div>
        </div>
        <div id='carousel' className={`flex w-full place-content-between transition-all`}>
                {data[slideIndex]?.map((product) => {
                    return (
                        <div className='flex flex-col w-72 h-96 shadow-xl bg-white cursor-pointer hover:scale-[120%] transition-all place-content-between'>
                            <div className='w-full h-auto object-cover overflow-hidden'>
                                <img className='w-full h-full' src={product.image} alt="" />
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
        </div>
        <div className='min-h-full flex flex-col place-content-center justify-center'>
            <div className='bg-button-color text-white w-fit p-2 cursor-pointer' onClick={() => {onNextSlide()}}><span>Right</span></div>
        </div>
    </div>
  )
}


export default ProductCarousel;