import React from 'react'

function CardComponentCategory({product}) {

    
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;

    const handleAddToCart = () => {
        console.log('sa')
        return (

                <div className='bg-red-700'>
                      Salut!  
                </div>

        )


    }
    // 'flex flex-col shadow-xl bg-white cursor-pointer transition-all place-content-between md:hover:scale-[120%]'
    return (
        <div className={`flex flex-col shadow-xl bg-white cursor-pointer transition-all place-content-between md:hover:scale-[120%] md:hover:${handleAddToCart()}`}>
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
    )
}

export default CardComponentCategory;