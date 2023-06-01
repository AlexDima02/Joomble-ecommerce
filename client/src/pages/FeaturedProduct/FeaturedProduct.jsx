import React, { useEffect } from 'react'
import FetchData from '../../components/FetchComponent/FetchData';
import { useParams } from 'react-router-dom';

function FeaturedProduct() {

  const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
  const params = useParams().id;
  console.log(params)
  const {error, data, fetchData} = FetchData()
  const colors = data?.data.data.attributes.variations.data?.filter((item) => item.attributes.title === 'color');
  console.log(colors?.map((color) => color.attributes.value_color))
  useEffect(() => {

    fetchData(`/products/${params}?populate=*`)

  }, [])

  console.log(data)

  return (
    <div className='min-h-screen flex max-w-7xl place-content-between border border-red-600 m-auto bg-white'>
      <div className='flex flex-col w-1/2'>
          <div className='w-full h-1/2 object-contain overflow-hidden'><img className='w-full h-full' src={urlApi + data?.data.data.attributes.product_image1.data.attributes.url} alt="" /></div>
          <div className='w-1/2 h-[25%] object-cover overflow-hidden'><img className='w-full h-full' src={urlApi + data?.data.data.attributes.product_image2.data.attributes.url} alt="" /></div>
      </div>
      <div className='flex flex-col ml-5 w-1/2 border border-red-700 '>
        <div className='text-3xl'>
          <h1>{data?.data.data.attributes.name}</h1>
        </div>
        <div className='text-xl mt-5'>
          <p>{data?.data.data.attributes.description}</p>
        </div>
        <div className='text-xl mt-5 flex'>
          <p className='mr-5'>{data?.data.data.attributes.price}$</p>
          <p className='line-through'>{data?.data.data.attributes.oldPrice}$</p>
        </div>
        <div className='text-lg mt-5'>
          <p>Colors:</p>
          <div className='flex w-1/2 place-content-between mt-3'>
            {colors?.map((color) => {

                return (

                  <span className={`bg-[${color.attributes.value_color}] h-10 w-10 rounded-full cursor-pointer hover:border border-white`}></span>

                )
                  

              })}
            
          </div>
        </div>
        <div className='flex mt-5'>
          <select name="" id="" className='bg-gray-200 text-gray-500 outline-none w-20'>
              <option value="1" className='text-black'>1</option>
              <option value="2" className='text-black'>2</option>
              <option value="3" className='text-black'>3</option>
              <option value="4" className='text-black'>4</option>
              <option value="5" className='text-black'>5</option>
              <option value="6" className='text-black'>6</option>
              <option value="7" className='text-black'>7</option>
              <option value="8" className='text-black'>8</option>
              <option value="9" className='text-black'>9</option>
              <option value="10" className='text-black'>10</option>
          </select>
          
          <button className='bg-button-color text-white py-2 w-64 ml-3'>ADD TO CART</button>
          
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct;
