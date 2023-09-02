import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar({toggleSideBar ,setToggleSideBar ,setToggleCart, toggleCart, setUrlGender, setCollectionUrl}) {
 
  const navigate = useNavigate();

  const handleOpenSideBar = (e) => {

    setToggleSideBar(!toggleSideBar);
    if(toggleSideBar){
      document.body.style.overflow = 'scroll';
    }else{
      document.body.style.overflow = 'hidden';
    }
    

  }

  const handleLinkToGender = (e) => {

    setUrlGender(e.target.id ? [e.target.id] : [])
    navigate(`/categories/${e.target.id}`)

  }

  const handleLinkToCollection = (e) => {

    setCollectionUrl(e.target.id ? [e.target.id] : [])
    navigate(`/categories/${e.target.id}`)

  }

  return (
    <div className='bg-primary-color flex place-content-between px-5 text-text-color py-2'>
        <div className='flex flex-col place-content-center'>
            <ul className='hidden align-middle md:flex h-fit'>
                <li id='Men' onClick={(e) => handleLinkToGender(e)} className='font-bold cursor-pointer'>
                    {/* <Link to='/categories/Men' relative="path">MEN</Link> */}
                    MEN
                </li>
                <li id='Women' className='mx-5 font-bold cursor-pointer' onClick={(e) => handleLinkToGender(e)}>
                    {/* <Link to='/categories/Women' relative="path">WOMEN</Link> */}
                    WOMEN
                </li>
                <li id='New' className='font-bold cursor-pointer' onClick={(e) => handleLinkToCollection(e)}>
                    {/* <Link to='/categories/New' relative="path">NEW ARRIVALS</Link> */}
                    NEW ARRIVALS
                </li>
            </ul>
        </div>
        <div className='text-5xl'>
          <span><Link to='/' relative="path">Joomble</Link></span>
        </div>
        <div className='flex place-content-between'>
          <div className='flex flex-col place-content-center cursor-pointer transition-all mr-5 md:mr-0' onClick={() => setToggleCart(!toggleCart)}>
              Cart
          </div>
          <div className='flex flex-col place-content-center md:hidden' onClick={() => handleOpenSideBar()}>
              <div className='flex flex-col place-content-between h-5 cursor-pointer transition-all'>
                <span className={`${toggleSideBar ? '-rotate-45 translate-y-2' : 'rotate-0'} bg-black w-6 h-1 transition-all`}></span>
                <span className={`${toggleSideBar ? 'hidden' : 'block'} bg-black w-6 h-1 transition-all`}></span>
                <span className={`${toggleSideBar ? 'rotate-45 -translate-y-2' : 'rotate-0'} bg-black w-6 h-1  transition-all`}></span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;