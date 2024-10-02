import React from 'react'
import { Outlet } from "react-router-dom"
import { Header } from "./index"
import { Footer } from "./index"
function AppLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout