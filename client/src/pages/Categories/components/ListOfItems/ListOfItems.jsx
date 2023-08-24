import React, { useEffect } from 'react'
import CardComponentCategory from "./components/CardComponentCategory.jsx"
import FetchData from '../../../../components/FetchComponent/FetchData.jsx'

function ListOfItems({products}) {
    
    console.log(products)
    return (

        <div className='grid grid-flow-row grid-cols-1  grid-rows-6'>
            {products?.map((product) => { 

                return (

                        <div key={product.id} className='w-full'>
                            <CardComponentCategory id={product.id} product={product}/>
                        </div>
                )

            })}
        </div>
        
    )
}

export default ListOfItems;