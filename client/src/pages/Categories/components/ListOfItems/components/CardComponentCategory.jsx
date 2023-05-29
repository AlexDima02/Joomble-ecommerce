import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CardComponentCategory({product, id}) {

    const [active, setActive] = useState(false)
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
        
    console.log(id)
    const navigate = useNavigate();
   
    const handleAddToCart = () => {
        
        setActive(!active);
        
    }

    const handleLinkTo = (e) => {

        console.log(e.target.id)
        navigate(`/product/${id}`);

    }
    
    return (
        <div className='relative flex flex-col shadow-xl cursor-pointer transition-all place-content-between md:hover:scale-[120%]' onMouseEnter={(e) => handleAddToCart(e)} onMouseLeave={() => setActive(false)}>
                    <div id={id} className='bg-white' onClick={(e) => handleLinkTo(e)}>
                        <div className='w-full h-auto object-cover overflow-hidden'>
                                <img className='w-full h-72' src={urlApi + product.attributes.product_image1.data.attributes.url} alt="" />
                        </div>
                        <div className='px-4 my-3'>
                                <h2>{product.attributes.name}</h2>
                                <p>Color</p>
                        </div>
                        <div className='flex place-content-between px-4 mb-3'>
                                <p>{product.attributes.price}$</p>
                                <span className='line-through'>{product.attributes.oldPrice}$</span>
                        </div>
                    </div>
                    <div className={`bg-button-color text-white text-center mt-5 py-3 flex flex-col place-content-center absolute w-full transition-all ${active ? '-bottom-10 z-0' : 'bottom-0 -z-10'}`}>
                        <div>   
                                <span onClick={(e) => console.log(e.currentTarget)}>BUY NOW!</span>                  
                        </div>
                    </div>
        </div>
    )
}

export default CardComponentCategory;