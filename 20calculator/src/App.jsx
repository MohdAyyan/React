import { useState } from 'react'
// import './App.css'
import BillInput from './components/BillInput'
import SelectPercentage from './components/SelectPercentage'
import Output from './components/Output'
import Reset from './components/Reset'

function App() {
  const [bill, setBill] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  
  // Convert bill to number and calculate tip
  const tip = Number(bill) * ((percentage1 + percentage2) / 2) / 100
  const total = Number(bill) + tip

  const handleReset = () => {
    setBill("")
    setPercentage1(0)
    setPercentage2(0)
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={percentage1} onSelectPercentage={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelectPercentage={setPercentage2}>How did your friend like the service?</SelectPercentage>
      <Output bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
    </>
  )
}

export default App
