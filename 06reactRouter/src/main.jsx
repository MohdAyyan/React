import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home,User,githubInfoLoader } from './components/index.js'
import Error from './components/Error/Error.jsx'

//1st Method to create router
// const router = createBrowserRouter([
// {
//   path:"/",
//   element:<Layout/>,
//   children:[
//   {
//     path:"",
//     element:<Home/>
//   },

// {
//   path:"about",
//   element:<About/>
// },
// {
//   path:"contact",
//   element:<Contact/>
// },
// // {},

//   ]
// }

// ])

//2nd Method to create a router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<Error/>}>
      <Route
      path='' element={<Home />}
      />
       <Route
      path='about' element={<About />}
      />
       <Route
      path='contact' element={<Contact />}
      />
       <Route
      path='user/:userid' element={<User />}
      />
       <Route
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
      />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
