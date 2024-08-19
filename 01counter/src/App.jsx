import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

function addvalue() {
  if (counter === 20) {
    setCounter(0)
  }else{
  setCounter(counter + 1);
  }
}

function removevalue() {
     if(counter <= 0){
      setCounter(0)
     }
     else{
  setCounter(counter - 1);

}
}

  return (
    <div>
      <h1>Counter value :{counter}</h1>
      <button
      onClick={addvalue}
      >ADD value :{counter}</button>
     <br />
      <button 
      onClick={removevalue}
      >Remove value:{counter}</button>
      <p>footer :{counter}</p>
     
    </div>
    
  )
}

export default App
