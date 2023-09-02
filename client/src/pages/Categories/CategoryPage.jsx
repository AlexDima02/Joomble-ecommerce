import React, { useEffect, useState } from 'react'
import CategoryOptions from './components/CategoryOptions/CategoryOptions';
import ListOfItems from './components/ListOfItems/ListOfItems';
import FetchData from '../../components/FetchComponent/FetchData';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import FilterModal from '../../components/FilterPopUp/FilterModal';

function CategoryPage({setToggleFilter, toggleFilter, urlGender, urlCollection}) {
  
  console.log(urlGender)
  const [gender, setGender] = useState([...urlGender])
  const [type, setType] = useState([])
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [collection, setCollection] = useState([...urlCollection])
  const [productList, setProductList] = useState([])
  console.log(gender)
  console.log(type)
  console.log(size)
  console.log(color)
  console.log(collection)
  const {error, data: dataGenderOptions, fetchData: fetchDataGenderOptions} = FetchData();
  const {error: error1, data: dataTypeOptions, fetchData: fetchDataTypeOptions} = FetchData();
  const {error: error2, data: dataSizesOptions, fetchData: fetchDataSizesOptions} = FetchData();
  const {error: error3, data: dataColorOptions, fetchData: fetchDataColorOptions} = FetchData();
  const {error: error4, data: dataCollectionOptions, fetchData: fetchDataCollectionOptions} = FetchData();
  const {error: error5, data: dataInitialProductList, loading, fetchData: fetchProductList} = FetchData();
  
  console.log(toggleFilter)
  console.log(loading)

  const handleOpenModal = () => {

    setToggleFilter(!toggleFilter);
    document.body.style.overflow = 'hidden';

  }

  
  useEffect(() => {

      fetchDataGenderOptions(`/categories?populate=*`)
      fetchDataTypeOptions(`/sub-categories?populate=*`)
      fetchDataSizesOptions(`/variations?populate=*&[filters][title][$eq]=Size`)
      fetchDataColorOptions(`/variations?populate=*&[filters][title][$eq]=Color`)
      fetchDataCollectionOptions(`/variations?populate=*&[filters][title][$eq]=Collection`)
      fetchProductList(
        `/products?populate=*${gender.map((item) => `&[filters][categories][title][$eq]=${item}`).join('')}
        ${type.map((item) => `&[filters][sub_categories][id][$eq]=${item}`).join('')}
        ${size.map((item) => `&[filters][variations][id][$eq]=${item}`).join('')}
        ${color.map((item) => `&[filters][variations][id][$eq]=${item}`).join('')}
        ${collection.map((item) => `&[filters][variations][value][$eq]=${item}`).join('')}
        `).then((res) => setProductList(res))

  }, [gender, type, size, color, collection, urlGender, urlCollection])

  return (
    <div className='min-h-screen relative bg-white'>
      
      {!loading ? 
      <div className='h-screen w-full flex bg-gray-400 opacity-70 place-content-center'>
        <div className='w-1/2 m-auto flex place-content-center'>
          <CircularProgress color="success" /> 
        </div>
      </div>
      : 
        <div className='overflow-y-hidden overflow-x-hidden relative max-w-[1500px] pt-0 flex place-content-between m-auto bg-white mt-10 md:mt-0 md:pt-10'>
            <div className=' w-1/3 px-5 mr-5 hidden md:block h-fit'>
              <CategoryOptions setToggleFilter={setToggleFilter} toggleFilter={toggleFilter} typeArr={type} sizeArr={size} colorArr={color} collectionArr={collection} genderArr={gender} setType={setType} setSize={setSize} setColor={setColor} setCollection={setCollection} setGender={setGender} gender={dataGenderOptions} types={dataTypeOptions} sizes={dataSizesOptions} colors={dataColorOptions} collection={dataCollectionOptions}/>
            </div>
            <div className=' px-5 w-full h-fit mb-24'>
              <ListOfItems products={productList}/>
            </div>
            <div className='fixed right-0 bottom-10 w-fit h-fit flex place-content-end mx-3 md:hidden'>
                <button className='rounded-3xl px-10 py-4 bg-button-color text-white' onClick={() => handleOpenModal()} >Filter</button>
            </div>
        </div>
      }
      <FilterModal setToggleFilter={setToggleFilter} toggleFilter={toggleFilter} typeArr={type} sizeArr={size} colorArr={color} collectionArr={collection} genderArr={gender} setType={setType} setSize={setSize} setColor={setColor} setCollection={setCollection} setGender={setGender} gender={dataGenderOptions} types={dataTypeOptions} sizes={dataSizesOptions} colors={dataColorOptions} collection={dataCollectionOptions}/>
    </div>
  )
}

export default CategoryPage;
