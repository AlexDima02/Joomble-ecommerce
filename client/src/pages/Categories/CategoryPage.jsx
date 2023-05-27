import React, { useEffect, useState } from 'react'
import CategoryOptions from './components/CategoryOptions/CategoryOptions';
import ListOfItems from './components/ListOfItems/ListOfItems';
import FetchData from '../../components/FetchComponent/FetchData';
import { useParams } from 'react-router-dom';

function CategoryPage() {

  
  const {error, data: dataListOptions, fetchData: fetchDataListOptions} = FetchData();
  const {error: error1, data: dataProducts, fetchData: fetchDataProducts} = FetchData();
  const {error: error2, data: dataListTypes, fetchData: fetchDataListTypes} = FetchData();
  const {error: error3, data: dataListSizes, fetchData: fetchDataListSizes} = FetchData();
  console.log(dataProducts)
  console.log(dataListOptions)
  console.log(dataListTypes)
  console.log(dataListSizes)
  
  useEffect(() => {
    
      // /categories?[filters][title][$eq]=Women&[filters][title][$eq]=Men&populate=*
        // /sub-categories?[filters][title][$eq]=shorts&[filters][title][$eq]=shoes&[filters][title][$eq]=t-shirts&[filters][title][$eq]=hoodies&populate=*
      fetchDataListOptions(`/sub-categories?[filters][title][$eq]=shorts&[filters][title][$eq]=shoes&[filters][title][$eq]=t-shirts&[filters][title][$eq]=hoodies&populate=*`);
      fetchDataListTypes(`/categories?populate=*&[filters][title][$eq]=Women&[filters][title][$eq]=Men`);
      fetchDataListSizes(`/variations?populate=*`);

  }, [])

  return (
    <div className='min-h-screen mt-10'>
      <div className='max-w-[1400px] flex place-content-between border border-red-600 m-auto'>
          <div className='border border-red-700 w-1/2 mr-5'>
            <CategoryOptions listOptions={dataListOptions} dataListTypes={dataListTypes} fetchDataProducts={fetchDataProducts}/>
          </div>
          <div className='border border-red-700 w-full grid grid-cols-3 gap-10 grid-rows-3'>
            <ListOfItems products={dataProducts}/>
          </div>
      </div>
    </div>
  )
}

export default CategoryPage;
