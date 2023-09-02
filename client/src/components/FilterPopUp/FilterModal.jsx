import React from 'react'
import CategoryOptions from '../../pages/Categories/components/CategoryOptions/CategoryOptions';

function FilterModal({setToggleFilter, toggleFilter, collectionArr ,colorArr , sizeArr ,typeArr, genderArr, gender, types, sizes, colors, collection, setGender, setType, setSize, setColor, setCollection}) {
  
  const handleCloseModal = () => {
    
    setToggleFilter(!toggleFilter)
    document.body.style.overflow = 'scroll'

  }
  
  return (
    <div className={`bg-primary-color ${toggleFilter ? 'top-[100%]' : 'top-0'} h-full w-full p-6 fixed left-0 transition-all md:hidden`}>
        <div className='w-full h-full flex flex-col place-content-between'>
          <CategoryOptions setToggleFilter={setToggleFilter} toggleFilter={toggleFilter} typeArr={typeArr} sizeArr={sizeArr} colorArr={colorArr} collectionArr={collectionArr} genderArr={genderArr} setType={setType} setSize={setSize} setColor={setColor} setCollection={setCollection} setGender={setGender} gender={gender} types={types} sizes={sizes} colors={colors} collection={collection}/>
          <div>
            <button onClick={() => handleCloseModal()} className='rounded-3xl px-10 py-4 bg-button-color text-white'>Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default FilterModal;