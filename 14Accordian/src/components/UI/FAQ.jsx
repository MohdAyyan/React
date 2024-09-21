import React from 'react'

function FAQ({currItem,onToggle,isActive}) {
    const {question,answer} = currItem;
    
    
  return (
  <li >
    <div className='accordion-grid'>
        <p>{question}</p>
        <button 
        className={isActive ? "active-btn":""}
        onClick={onToggle}>{isActive? "Close" : "Show"}</button>
    </div>
    <p>{isActive && answer}</p>
  </li>
  )
}

export default FAQ