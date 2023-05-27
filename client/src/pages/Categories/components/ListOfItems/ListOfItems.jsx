import React, { useEffect } from 'react'
import CardComponentCategory from "./components/CardComponentCategory.jsx"
import FetchData from '../../../../components/FetchComponent/FetchData.jsx'

function ListOfItems({products}) {
    
   
    return (

        <>
        {products?.data.data?.map((product) => { 

            return (

                    <div key={product.id}>
                        <CardComponentCategory product={product}/>
                    </div>
                )  
            })}

        </>
        
    )
}

export default ListOfItems;