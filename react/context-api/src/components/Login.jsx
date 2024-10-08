import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({userName,password})
    }


  return (
    <div>
        <input type="text" 
      placeholder='UserName'
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      />
      
      <input type="password" 
      placeholder='PassWord'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default Login