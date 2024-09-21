import React from 'react'
import faq from "../api/faq.json"
import { useState,useEffect } from 'react'
import FAQ from "./UI/FAQ"
function Accordian() {
  const [data, setData] = useState([])
  const [activeId, setActiveId] = useState(false)
  // const [show, setShow] = useState(false)
  useEffect(() => {
    setData(faq)
  })
   console.log(data)
  const handleButton =(id)=>{
    setActiveId((prevId)=>(prevId === id ? false :id))
  }

    return (
    <>
    <h1>The Accordion</h1>
    <ul className='section-accordion'>
        {
            data.map((item) => {
                return (
               <FAQ key={item.id} currItem={item} isActive = {activeId === item.id} onToggle ={()=> handleButton(item.id)}/>
                )
            })
        }
    </ul>
    </>
  )
}

export default Accordian