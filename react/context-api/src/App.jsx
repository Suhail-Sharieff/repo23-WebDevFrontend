
import { createContext, useContext, useState } from 'react'
import './App.css'
// import UserContextProvider from './context/UserContextProvider'
// import Login from './components/Login'
// import Profile from './components/Profile'

const UserContext=createContext()

function App() {

 const [data,setData]=useState('')
  return (
    // <UserContextProvider>
    //  <Login/>
    //  <Profile/>
    // </UserContextProvider>

    
      
    <>
    
    <UserContext.Provider value={{data,setData}}>
      <input type="text" placeholder='userName' onChange={(e)=>setData(e.target.value)}/>
      <Show/>
      {/* now Show inherits data, access it using const {data} = useContext(UserContext) */}
    </UserContext.Provider>
    
    </>
    
  )
}

function Show(){
  const {data}=useContext(UserContext)

  const [name,setName]=useState('pls login')

  function handleClick(){
    setName(data)
  }
  return (
    <>
      <button onClick={handleClick}>show</button>
      hola {name}
    </>
  )
}

export default App
