import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
    <div className="container"> 
      <div className="grid navbar-grid">
        
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
          <nav >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/country">Country</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        </div>

        
        </div>
   
   </header>
  )
}

export default Header