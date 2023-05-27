import axios from "axios"

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_TOKEN;

const makeRequests = axios.create({

        baseURL: url,
        headers: {

            Authorization: "bearer " + apiKey,
    
        },

})




export default makeRequests;