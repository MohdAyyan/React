import React from 'react'
import axios from 'axios'

const  api = axios.create({
    baseURL:'https://www.omdbapi.com/'
});


export const getMovie =()=>{
    return api.get("?i=tt3896198&apikey=1c12799f");
}

export default GetServices