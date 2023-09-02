import React from 'react'
import { useNavigate } from 'react-router-dom';

function CardComponent({infoProduct, id}) {
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
    console.log(infoProduct)
    const navigate = useNavigate();

    const handleLinkTo = (e) => {

        console.log(e.target.id)
        navigate(`/product/${id}`);

    }
    return (
        <>
            <div id={id} className='flex flex-col shadow-xl bg-white cursor-pointer transition-all place-content-between md:hover:scale-[120%] md:m-16' onClick={(e) => handleLinkTo(e)}>
                    <div className='w-full h-auto object-cover overflow-hidden'>
                            <img className='w-full h-72' src={infoProduct.attributes.product_image1?.data == null ? '' : infoProduct.attributes.product_image1?.data.attributes.url} alt="" />
                    </div>
                    <div className='px-4 my-3'>
                            <h2>{infoProduct.attributes.name}</h2>
                            <p>Color</p>
                    </div>
                    <div className='flex place-content-between px-4 mb-3'>
                            <p>{infoProduct.attributes.price}$</p>
                            <span className={`line-through ${infoProduct.attributes.oldPrice > 0 ? 'block' : 'hidden'}`}>{infoProduct.attributes.oldPrice}$</span>
                    </div>
                </div>
        </>
    )
}

export default CardComponent;
