import React, { useEffect, useState } from 'react'
import FetchData from '../../../../components/FetchComponent/FetchData';

function CategoryOptions({listOptions, dataListTypes, dataListSizes, fetchDataProducts}) {
    
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    console.log(gender);
    const subCategories = listOptions?.data.data;
    const categories = dataListTypes?.data.data;
    const dataType = dataListSizes?.data.data;
    const sizes = dataType?.filter((color) => color.attributes.title === 'size');
    console.log(sizes)
    const colors = dataType?.filter((color) => color.attributes.title === 'color');
    console.log(colors)
    const collection = dataType?.filter((collectionType) => collectionType.attributes.title === 'collection');
    console.log(collection)

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
        setType(e.target.id);
        fetchDataProducts(`/products?filters[sub_categories][id]=${e.target.id}&filters[categories][id]=${gender}&populate=*`);
    }

    const handleClickSize = (e) => {

        console.log(e.target.id)
        fetchDataProducts(`/products?&filters[categories][id]=${gender}&filters[variations][id]=${e.target.id}&populate=*`);

    }
    const handleClickColor = (e) => {

        console.log(e.target.id)
        fetchDataProducts(`/products?&filters[variations][id]=${e.target.id}&populate=*`);

    }
    const handleClickCollection = (e) => {

        console.log(e.target.id)
        fetchDataProducts(`/products?&filters[variations][id]=${e.target.id}&populate=*`);

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


                            <li id={subCat.id} key={subCat.id} className='cursor-pointer' onClick={(e) => handleClickType(e)}>{subCat.attributes.title}</li>

                        ))}
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Size:</h2>
                    <div className='pt-2 w-full'>
                        <ul className='h-full grid-cols-4 grid w-full'>
                            
                            {sizes?.map((size) => (

                                <li key={size.id} id={size.id} className='mb-2 border border-black w-14 text-center p-3 cursor-pointer' onClick={(e) => handleClickSize(e)}>{size.attributes.value_number}</li>

                            ))}

                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Colors:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                            
                            {colors?.map((color) => (

                                <li key={color.id} id={color.id} className='mb-2 cursor-pointer' onClick={(e) => handleClickColor(e)}>{color.attributes.value}</li>

                            ))}
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Collection:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                            
                            {collection?.map((collection) => (

                                <li key={collection.id} id={collection.id} className='mb-2 cursor-pointer' onClick={(e) => handleClickCollection(e)}>{collection.attributes.value}</li>

                            ))}
                        </ul>
                    </div> 
                </div>
            </div>
      </div>
    </div>
  )
}

export default CategoryOptions;