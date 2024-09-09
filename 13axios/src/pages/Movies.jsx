import React from 'react'
import axios from "axios"
import Card from '../components/Card';
import { getMovie } from '../services/GetServices';

function Movies() {
   
   const [data, setData] = React.useState([])

  const  getMovieData=async ()=>{
    try {
        const res = await getMovie()
        console.log(res.data.Search);
        setData(res.data.Search)
        
    } catch (error) {
        console.log(error)
        
    }
   }

   React.useEffect(()=>{
    getMovieData();
   },[])
  
    return (
    <ul>
        {data.map((item)=>{
            if(!item.Poster) return null;
            return <Card key={item.imdbID} moviesData={item}/>
        })}
    </ul>
  )
}

export default Movies