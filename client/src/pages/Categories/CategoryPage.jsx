import React, { useEffect, useState } from 'react'
import CategoryOptions from './components/CategoryOptions/CategoryOptions';
import ListOfItems from './components/ListOfItems/ListOfItems';
import FetchData from '../../components/FetchComponent/FetchData';
import { useParams } from 'react-router-dom';

function CategoryPage() {

  const [gender, setGender] = useState([])
  const [type, setType] = useState([])
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [collection, setCollection] = useState([])
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
  const {error: error5, data: dataInitialProductList, fetchData: fetchProductList} = FetchData();
  
  console.log(productList)

  
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
      

  }, [gender, type, size, color, collection])

  return (
    <div className='min-h-screen pt-10 bg-white'>
      <div className='relative max-w-[1400px] flex place-content-between border border-red-600 m-auto bg-white'>
          <div className='border border-red-700 w-1/2 px-5 mr-5 hidden md:block h-fit'>
            <CategoryOptions typeArr={type} sizeArr={size} colorArr={color} collectionArr={collection} genderArr={gender} setType={setType} setSize={setSize} setColor={setColor} setCollection={setCollection} setGender={setGender} gender={dataGenderOptions} types={dataTypeOptions} sizes={dataSizesOptions} colors={dataColorOptions} collection={dataCollectionOptions}/>
          </div>
          <div className='border border-red-700 px-5 w-full grid grid-cols-3 gap-10 grid-rows-4 h-fit'>
            <ListOfItems products={productList}/>
          </div>
          <div className='absolute bottom-0 w-full flex place-content-end mx-3'>
              <button className='rounded-3xl px-10 py-4 bg-red-50'>Filter</button>
          </div>
      </div>
    </div>
  )
}

export default CategoryPage;
