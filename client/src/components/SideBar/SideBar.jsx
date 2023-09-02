import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideBar({toggleSideBar, setUrlGender, setCollectionUrl}) {

    const navigate = useNavigate();

    const handleLinkToGender = (e) => {

        setUrlGender(e.target.id ? [e.target.id] : [])
        navigate(`/categories/${e.target.id}`)
    
      }
    
      const handleLinkToCollection = (e) => {
    
        setCollectionUrl(e.target.id ? [e.target.id] : [])
        navigate(`/categories/${e.target.id}`)
    
      }


  return (
    <div className={`${toggleSideBar ? 'left-[50%]' : 'left-[100%]'} bg-primary-color h-screen flex flex-col place-content-center fixed w-1/2 left-0 z-[99] top-[6%] overflow-scroll transition-all md:hidden`}>
            <ul className='my-5'>
                <li id='Men' onClick={(e) => handleLinkToGender(e)} className='hover:bg-background-color text-center font-bold cursor-pointer px-2 py-5'>
                        {/* <Link to='/categories/Men' relative="path">MEN</Link> */}
                        MEN
                </li>
                <li id='Women' className='hover:bg-background-color font-bold cursor-pointer my-10 px-2 py-5 text-center' onClick={(e) => handleLinkToGender(e)}>
                        {/* <Link to='/categories/Women' relative="path">WOMEN</Link> */}
                        WOMEN
                </li>
                <li id='New' className='hover:bg-background-color font-bold cursor-pointer px-2 py-5 text-center' onClick={(e) => handleLinkToCollection(e)}>
                        {/* <Link to='/categories/New' relative="path">NEW ARRIVALS</Link> */}
                        NEW ARRIVALS
                </li>
            </ul>
    </div>
  )
}

export default SideBar;