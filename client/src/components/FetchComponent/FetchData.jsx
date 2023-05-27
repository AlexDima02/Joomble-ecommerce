import React, { useEffect, useState } from 'react'
import axios from 'axios';
import makeRequests from './makeRequests';

function FetchData(query) {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const apiKey = import.meta.env.VITE_API_TOKEN;
  

  // useEffect(() => {

  //   fetchData(query);


  // }, []);

  const fetchData = async (query) => {
    console.log(query)
    try{

      const data = await makeRequests.get(query);

      setData(data);

    }catch(e){

      console.log(e)
      setError(e.message)

    }
  }


  return {error, data, fetchData}

}


export default FetchData;