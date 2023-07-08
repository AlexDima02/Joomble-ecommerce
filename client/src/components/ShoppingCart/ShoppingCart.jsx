import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterManager, increment, addToCart, decrement, removeFromCart, calculateTotalAmount, addToCartFromProductPage } from './components/CounterSlice';
import { loadStripe } from "@stripe/stripe-js";
import makeRequests from '../FetchComponent/makeRequests'

function ShoppingCart({toggleCart, setToggleCart}) {

    
    const stripePromise = loadStripe("pk_test_51NETJdDbopdISZkbfTNvk0uROngSCayFLjDeqsEET81LUg5OqJ1CunZs0PGI3oQsoC0Od3FOr1288ReLaGazkFOm00r2b4jYUv");
    const counter = useSelector(counterManager);
    const dispatch = useDispatch();
    const products = counter.countProducts;
    console.log(counter);
    const urlApi = import.meta.env.VITE_UPLOAD_IMAGE_URL;
    
    useEffect(() => {

        dispatch(calculateTotalAmount())

    });


    const subTotalAmount = () => {

        let count = 0;
        counter?.countProducts?.forEach((product) => {

            count += product.subTotal;

        })

        return count
    }

    const handlePayment = async () => {
        try {

          const stripe = await stripePromise;
          
          const res = await makeRequests.post("/orders", {
            products
          });
          console.log(res.data)
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
    };
    
  return (
    
    <div className={`${toggleCart ? 'top-16 right-0 z-10' : '-z-20 top-0 right-0 opacity-0'} w-1/2 flex place-content-end absolute bg-white transition-all`}>
      
      <div className='w-full'>
        <div className='bg-primary-color flex place-content-between px-5'>
            <span className='font-thin text-2xl text-gray-400 cursor-pointer' onClick={() => setToggleCart(!toggleCart)}>X</span>
            <span>Count: {counter.countProducts.length}</span>
        </div>
        
        



        <div className='mx-5 py-5'>
            

            {counter?.countProducts?.map((products) => (

                    <div className='flex border-b-gray-400 border-b mb-10'>
                        <div className='flex w-1/2'>
                            <div className='object-cover overflow-hidden w-36 h-36'><img src={urlApi + products?.attributes.product_image1.data.attributes.url} alt=""  className='w-full h-full'/></div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex w-full place-content-between'>
                                <div>
                                    <h1>{products.attributes.name}</h1>
                                </div>
                                <div>
                                    <span id={products.id} className='cursor-pointer' onClick={() => dispatch(removeFromCart())}>X</span>
                                </div>
                            </div>

                            <div>
                                
                                <span>{products.attributes.variations.data?.filter(item => item.attributes.title === 'color').map((item) => item.attributes.value)}</span>
                            </div>
                            <div>
                                <span>Size: {products.attributes.variations.data?.filter(item => item.attributes.title === 'size').map((item) => item.attributes.value_number)}</span>
                            </div>
                            <div className='flex place-content-between py-10'>
                                <div className='border border-black'>
                                    <span id={products.id} className='cursor-pointer px-5 hover:bg-gray-400' onClick={(e) => dispatch(decrement(e.target.id))}>-</span>
                                    <span className='mx-5'>{products.quantity}</span>
                                    <span id={products.id} className='cursor-pointer px-5 hover:bg-gray-400' onClick={(e) => dispatch(increment(e.target.id))}>+</span>
                                </div>
                                <div>
                                    <span className='mr-5'>{products.attributes.price * products.quantity}$</span>
                                    <span className='line-through'>{products.attributes.oldPrice}$</span>
                                </div>
                            </div>
                        </div>
                    </div>



            ))}
            
            





            <div className='border-t-gray-400 border-t py-3'>
                <div className='flex place-content-between'>
                    <span className='font-bold'>Subtotal</span>
                    <span>{subTotalAmount() + '$'}</span>
                </div>
                <div className='flex place-content-between'>
                    <span className='font-bold'>Shipping</span>
                    <span>FREE</span>
                </div>
                <div>
                    <button className='w-full bg-button-color py-3 my-5 font-bold text-white' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}


export default ShoppingCart;
