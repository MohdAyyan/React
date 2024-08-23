import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'
export default function Error() {
  return (
    <section>
    <div className='mb-8 text-red-700 '>Error Page not Found !</div>
   <NavLink className="text-gray-600 p-4  rounded-xl w-12 bg-red-800" to="/">
   Go To Home Page 
   </NavLink>
    </section>
  )
}
