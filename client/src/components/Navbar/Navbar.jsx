import React from 'react'
import { Link } from "react-router-dom";

function Navbar({setToggleCart, toggleCart}) {
  return (
    <div className='bg-primary-color flex place-content-between px-5 text-text-color py-2'>
        <div className='flex flex-col place-content-center'>
            <ul className='hidden align-middle md:flex h-fit'>
                <li className='font-bold'>
                    <Link to='/categories' relative="path">MEN</Link>
                </li>
                <li className='mx-5 font-bold'>
                    <Link to='/categories' relative="path">WOMEN</Link>
                </li>
                <li className='font-bold'>
                    <Link to='/categories' relative="path">NEW ARRIVALS</Link>
                </li>
            </ul>
        </div>
      <div className='text-5xl'>
        <span><Link to='/' relative="path">Joomble</Link></span>
      </div>
      <div className='flex flex-col place-content-center'>
        <div className='flex flex-col place-content-center cursor-pointer transition-all' onClick={() => setToggleCart(!toggleCart)}>
            Cart
        </div>
      </div>
    </div>
  )
}

export default Navbar;