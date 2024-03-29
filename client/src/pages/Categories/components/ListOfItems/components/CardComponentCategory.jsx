import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, calculateTotalAmount } from '../../../../../components/ShoppingCart/components/CounterSlice';

function CardComponentCategory({product, id}) {

    const dispatch = useDispatch();

    const [active, setActive] = useState(false)
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
        
    
    const navigate = useNavigate();
   
    const handleAddToCart = () => {
        
        setActive(!active);
        
    }

    const handleLinkTo = (e) => {

        console.log(e.target.id)
        navigate(`/product/${id}`);

    }
    
    return (
        <div className='mt-5 relative flex flex-col shadow-xl cursor-pointer transition-all place-content-between md:hover:scale-[120%]' onMouseEnter={(e) => handleAddToCart(e)} onMouseLeave={() => setActive(false)}>
                    <div id={id} className='bg-white' onClick={(e) => handleLinkTo(e)}>
                        <div className='w-full h-auto object-cover overflow-hidden'>
                                <img className='w-full h-72' src={product?.attributes?.product_image1?.data?.attributes?.url ?? ''} alt="" />
                        </div>
                        <div className='px-4 my-3'>
                                <h2>{product?.attributes.name}</h2>
                                <p>Color</p>
                        </div>
                        <div className='flex place-content-between px-4 mb-3'>
                                <p>{product?.attributes.price}$</p>
                                <span className={`${product.attributes.oldPrice > 0 ? 'block' : 'hidden'} line-through`}>{product.attributes.oldPrice}$</span>
                        </div>
                    </div>
                    <div className={`bg-button-color  text-white text-center mt-5 py-3 flex-col place-content-center  w-full transition-all md:flex -bottom-10 z-0 `}>
                        <div>   
                                <span onClick={() => {dispatch(addToCart(product))}}>BUY NOW!</span>                  
                        </div>
                    </div>
        </div>
    )
}

export default CardComponentCategory;