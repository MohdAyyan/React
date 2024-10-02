import { StrictMode } from 'react'
import { createRoot  } from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import { AppLayout , Home , About, Country , Contact , ErrorPage , CountryDetails} from "./index"

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<AppLayout/>} errorElement={<ErrorPage/>}>
          <Route path="" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="country" element={<Country/>} />
          <Route path="country/:id" element={<CountryDetails/>} />
          <Route path="contact" element={<Contact/>} />

          </Route>
    )

)


createRoot(document.getElementById('root')).render(

  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
