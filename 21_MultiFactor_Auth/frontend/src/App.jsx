import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 h-screen'>
      <div className='flex justify-center items-center h-screen'> 
    <RouterProvider router={router} />
      </div>
    
    </div>
  )
}

export default App
