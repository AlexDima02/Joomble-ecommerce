import React, { useEffect, useState } from 'react'
import axios from 'axios';
import makeRequests from './makeRequests';

function FetchData(query) {

  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_TOKEN;

  // useEffect(() => {

  //   fetchData(query);


  // }, []);

  const fetchData = async (query) => {
    console.log(query)
    setLoading(false)
    try{

      const data = await makeRequests.get(query);
      setLoading(true)
      setData(Array.isArray(data.data['data']) ? [...data.data['data']] : [data.data['data']]);
      return data.data['data'];
      
    }catch(e){

      console.log(e)
      setError(e.message)

    }
  }


  return {error, data, loading, fetchData}

}


export default FetchData;