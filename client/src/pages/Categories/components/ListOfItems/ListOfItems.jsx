import React, { useEffect } from 'react'
import CardComponentCategory from "./components/CardComponentCategory.jsx"
import FetchData from '../../../../components/FetchComponent/FetchData.jsx'

function ListOfItems({products}) {
    
    console.log(products)
    return (

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3'>
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