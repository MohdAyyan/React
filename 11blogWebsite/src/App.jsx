import { useState } from 'react'

import './App.css'
import { Header,Footer } from './components'
import {Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
      <h1>Blog Website</h1>
      <Header/>
      <main>
        <Outlet/>
      </main>
       <Footer/>
    </>
  )
}

export default App
