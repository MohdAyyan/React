// import React from 'react';
// import "./Login.css"
// import UserContext from '../context/UserContext'
// import { useState , useContext } from 'react';
// function Login() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const {setUser} = useContext(UserContext)
  
//   const handleSubmit =(e)=>{
//         e.preventDefault();
//         setUser({username,password});
        
//   }
//     return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form>
//         <label>
//           Username:
//           <input type="text" className="login-input" value={username}
//           onChange={(e)=> setUsername(e.target.value)} placeholder='username'
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password"
//           placeholder='password'
//           onChange={(e)=> setPassword(e.target.value)} 
//           value={password}
//           className="login-input" />
//         </label>
//         <br />
//         <button className="login-button" onSubmit={handleSubmit}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        setUsername("")
        setPassword("")
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
