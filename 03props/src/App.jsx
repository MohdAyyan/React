//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className='text-gray-700 text-3xl bg-green-800 p-6 rounded-xl mb-7'>tailwind Test</h1>
     
    <Card username="Sofi" btnText="Click Me" />
    <Card username="Lati" btnText="Visit Me!" />

    </>
  )
}

export default App
