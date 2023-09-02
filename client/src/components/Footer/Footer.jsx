import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-primary-color flex flex-col place-content-center text-text-color min-h-max px-10 pt-10'>
      <div className='text-5xl text-center w-full mb-10'>
        <span><Link to='/' relative="path">Joomble</Link></span>
      </div>
      <div className='mx-10 flex place-content-center'>
            <ul className='place-content-between md:flex w-1/2'>
                <li className='font-bold flex flex-col'>
                    <Link to='/categories' relative="path">HELP</Link>
                    <Link to='/' relative="path">ORDER STATUS</Link>
                    <Link to='/' relative="path">SHOPPING AND DELIVERY</Link>
                    <Link to='/' relative="path">RETURNS</Link>
                    <Link to='/' relative="path">PAYMENT OPTIONS</Link>
                </li>
                <li className='font-bold flex flex-col my-5 md:my-0'>
                    <Link to='/categories' relative="path">SHOP</Link>
                    <Link to='/' relative="path">NEWS</Link>
                    <Link to='/' relative="path">ABOUT US</Link>
                    <Link to='/' relative="path">CAREERS</Link>
                    <Link to='/' relative="path">SUSTAINABILITY</Link>
                </li>
                <li className='font-bold flex flex-col'>
                    <Link to='/categories' relative="path">COMPANY</Link>
                    <Link to='/' relative="path">FIND A STORE</Link>
                    <Link to='/' relative="path">CONTACT US</Link>
                    <Link to='/' relative="path">BLOG</Link>
                </li>
            </ul>
        </div>
        <div className='w-full text-center mt-10'>
          <p className='text-gray-500'>&copy; 2023 Joomble, Inc. All Rights Reserved</p>
        </div>
    </div>
  )
}


export default Footer;
