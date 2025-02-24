import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    
    const controller = new AbortController()
    ;(
    async () => {
     
      try{
      setLoading(true)
      
      const response = await axios.get("/api/products?search="+search,{
        signal:controller.signal
      })
      setProducts(response.data)
      setLoading(false)
     }
     catch(error){
      if(axios.isCancel(error)){
      console.log("Request canceled",error.message)
      return;      
      }
        setError(error.message)
        setLoading(false)
      }
     }
    )()
    return () => controller.abort()
  },[search])

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error}</h1>
  
  
   return (
    <>
      <h1>Product List</h1>
      <p>Number of products: {products.length}</p>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" />
    </>
  )
}

export default App
