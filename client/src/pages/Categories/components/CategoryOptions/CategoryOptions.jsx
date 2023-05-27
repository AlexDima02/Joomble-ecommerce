import React, { useEffect, useState } from 'react'
import FetchData from '../../../../components/FetchComponent/FetchData';

function CategoryOptions({listOptions, dataListTypes, fetchDataProducts}) {
    
    const [gender, setGender] = useState('');
    console.log(gender);
    const subCategories = listOptions?.data.data;
    const categories = dataListTypes?.data.data;

   
    useEffect(() => {

        fetchDataProducts(`/products?populate=*`)

    }, [])

    const handleClickGender = (e) => {

        console.log(e.target.id)
        setGender(e.target.id)
        fetchDataProducts(`/products?filters[categories][id]=${e.target.id}&populate=*`)
        
    }


    const handleClickType = (e) => {

        console.log(e.target.id)
        fetchDataProducts(`/products?filters[sub_categories][id]=${e.target.id}&filters[categories][id]=${gender}&populate=*`)
    }

    
  return (
    <div>
      <div className='flex flex-col place-content-center'>
            <div className='flex place-content-between w-full border border-black rounded-3xl mb-4'>
                {categories?.map((gender) => (
                    <div key={gender.id} id={gender.id} className='hover:bg-button-color hover:text-white rounded-3xl px-4 py-3 cursor-pointer' onClick={(e) => handleClickGender(e)}>
                        <span>{gender.attributes.title}</span>
                    </div>
                ))}
            </div>
            <div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Type:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                        {subCategories?.map((subCat) => (


                            <li id={subCat.id} key={subCat.id} onClick={(e) => handleClickType(e)}>{subCat.attributes.title}</li>

                        ))}
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Size:</h2>
                    <div className='pt-2 w-full'>
                        <ul className='h-full grid-cols-4 grid w-full'>
                            <li className='mb-2 border border-black w-14 text-center p-3'>34.5</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>36</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>41</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>42</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                            <li className='mb-2 border border-black w-14 text-center p-3'>43</li>
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Colors:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                            <li className='mb-2'>Cyan</li>
                            <li className='mb-2'>Blue</li>
                            <li className='mb-2'>Green</li>
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Collection:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                            <li className='mb-2'>New</li>
                            <li className='mb-2'>Trendy</li>
                        </ul>
                    </div> 
                </div>
            </div>
      </div>
    </div>
  )
}

export default CategoryOptions;