import React, { useEffect, useState } from 'react'
import FetchData from '../../../../components/FetchComponent/FetchData';

function CategoryOptions({collectionArr ,colorArr , sizeArr ,typeArr, genderArr, gender, types, sizes, colors, collection, setGender, setType, setSize, setColor, setCollection}) {
    
    
    const [genderState, setGenderState] = useState(true);
    const [typeState, setTypeState] = useState(true);
    const [sizeState, setSizeState] = useState(true);
    const [colorsState, setColorState] = useState(true);
    const [collectionState, setCollectionState] = useState(true);

    useEffect(() => {

    }, [])

    const handleClickGender = (e) => {

        
        console.log(e.target.id)
        setGender(genderArr.indexOf(e.target.id) == -1 ? [...genderArr, e.target.id] : genderArr.filter((item) => item != e.target.id))
        
    }

    const handleClickType = (e) => {

        console.log(e.target.id)
        setType(typeArr.indexOf(e.target.id) == -1 ? [...typeArr, e.target.id] : typeArr.filter((item) => item != e.target.id))

    }

    const handleClickSize = (e) => {

        console.log(e.target.id)
        setSize(sizeArr.indexOf(e.target.id) == -1 ? [...sizeArr, e.target.id] : sizeArr.filter((item) => item != e.target.id))
    }
    const handleClickColor = (e) => {

        console.log(e.target.id)
        setColor(colorArr.indexOf(e.target.id) == -1 ? [...colorArr, e.target.id] : colorArr.filter((item) => item != e.target.id))

    }
    const handleClickCollection = (e) => {

        console.log(e.target.id)
        setCollection(collectionArr.indexOf(e.target.id) == -1 ? [...collectionArr, e.target.id] : collectionArr.filter((item) => item != e.target.id))

    }
    
  return (
    <div>
      <div className='flex flex-col place-content-center'>
            <div className='flex place-content-between w-full border border-black rounded-3xl mb-4'>
                {gender?.map((gender) => (
                    <div key={gender.id} id={gender.attributes.title} className='hover:bg-button-color hover:text-white rounded-3xl px-4 py-3 cursor-pointer' onClick={(e) => handleClickGender(e)}>
                        <span>{gender.attributes.title}</span>
                    </div>
                ))}
            </div>
            <div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Type:</h2>
                    <div className='pt-2'>
                        <ul className='h-full flex flex-col place-content-between'>
                            {types?.map((type) => (
                                <li id={type.id} onClick={(e) => handleClickType(e)} className='cursor-pointer'>{type.attributes.title}</li>
                            ))}
                        </ul>
                    </div> 
                </div>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Size:</h2>
                    <div className='pt-2 w-full'>
                        <ul className='h-full grid-cols-4 grid w-full'>
                            {sizes?.map((size) => (
                                <li onClick={(e) => handleClickSize(e)} id={size.id} key={size.id} className='mb-2 border border-black w-14 text-center p-3 cursor-pointer'>{size.attributes.value}</li>
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

                                <li onClick={(e) => handleClickCollection(e)} key={collection.id} id={collection.attributes.value} className='mb-2 cursor-pointer'>{collection.attributes.value}</li>

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