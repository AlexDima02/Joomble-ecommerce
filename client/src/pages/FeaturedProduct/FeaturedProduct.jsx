import React, { useEffect, useState } from 'react'
import FetchData from '../../components/FetchComponent/FetchData';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartFromProductPage } from '../../components/ShoppingCart/components/CounterSlice';
import { CircularProgress } from '@mui/material';
import ImageCarousel from './components/ImageCarousel';

function FeaturedProduct() {
  
  const {error, data, loading, fetchData} = FetchData()
  console.log(data)
  const [productAndQuantity, setProductAndQuantity] = useState(null);
  const [selectedImage, setImage] = useState('');
  console.log(selectedImage)
  const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
  const params = useParams().id;
  const dispatch = useDispatch();
  const product = data[0];
  const colors = product?.attributes?.variations.data?.filter((item) => item.attributes.title === 'Color');
  console.log(productAndQuantity)
  console.log(colors)
  console.log(colors?.map((color) => color.attributes.value_color))
  

  useEffect(() => {

    fetchData(`/products/${params}?populate=*`).then((res) => console.log(res))

  }, [])

  console.log(product)

  return (
    <div>
      {!loading ? 
        <div className='h-screen w-full flex bg-gray-400 opacity-70 place-content-center'>
          <div className='w-[70%] m-auto flex place-content-center'>
            <CircularProgress color="success" /> 
          </div>
        </div>
      :
      <div className='min-h-screen sm:flex max-w-7xl place-content-between justify-center border border-red-600 m-auto bg-white md:flex'>
        <div className='w-full hidden md:flex'>
          <div className='border border-red-400 flex-col place-content-between'>
            <div id={product?.attributes?.product_image1?.data?.attributes?.url} onClick={(e) => setImage(e.target.id)} className='cursor-pointer w-[100px] h-[100px] object-contain overflow-hidden mb-5 border border-red-400'><img className='pointer-events-none w-full h-full' src={product?.attributes?.product_image1?.data?.attributes?.url ?? ''} alt="" /></div>
            <div id={product?.attributes?.product_image2?.data?.attributes?.url} onClick={(e) => setImage(e.target.id)} className='cursor-pointer w-[100px] h-[100px] object-contain overflow-hidden border border-red-400'><img className='pointer-events-none w-full h-full' src={product?.attributes?.product_image2?.data?.attributes?.url ?? ''} alt="" /></div>
          </div>
          <div className='w-full h-full border border-red-400 ml-3'>
            <div className='w-full h-1/2 object-cover overflow-hidden border border-red-400'><img className='w-full h-full' src={selectedImage ? selectedImage : product?.attributes?.product_image1?.data?.attributes?.url} alt="" /></div>
          </div>
        </div>
        <ImageCarousel product={product}/>
        <div className='flex flex-col p-5 w-full border border-red-700 md:ml-5 md:w-1/2'>
          <div className='text-3xl'>
            <h1>{product?.attributes.name}</h1>
          </div>
          <div className='text-xl mt-5'>
            <p>{product?.attributes.description}</p>
          </div>
          <div className='text-xl mt-5 flex'>
            <p className='mr-5'>{product?.attributes.price}$</p>
            <p className='line-through'>{product?.attributes.oldPrice}$</p>
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
            <select name="" id={params} className='bg-gray-200 text-gray-500 outline-none w-20' onChange={(e) => setProductAndQuantity({...product, quantity: parseInt(e.target.value)})}>
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
            
            <button className='bg-button-color text-white py-2 w-64 ml-3' onClick={() =>  dispatch(addToCartFromProductPage(productAndQuantity))}>ADD TO CART</button>
            
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default FeaturedProduct;
