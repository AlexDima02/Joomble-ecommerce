import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-primary-color text-text-color min-h-max'>
      <div className='mx-10 flex place-content-center'>
            <ul className='place-content-between md:flex w-1/2'>
                <li className='font-bold'>
                    <Link to='/categories' relative="path">HELP</Link>
                </li>
                <li className='font-bold'>
                    <Link to='/categories' relative="path">SHOP</Link>
                </li>
                <li className='font-bold flex flex-col'>
                    <Link to='/categories' relative="path">COMPANY</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}


export default Footer;
