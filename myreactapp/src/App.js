import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import NameFunction from './components/nameFunction';
//to get Emmets(suggestions)-->choose Language mode at bottom of VS code-->choose React rather than default Javascript
// npm start
function App() {

  const [value,setValue]=useState(0)
  return (
    <div className="App">
      
      <hr />
      making counter:
      {/* import {useState} from 'react'   */}
       <div className="value">{value}</div>
       <button onClick={()=>{setValue(value+1)}}>Click to add 1</button>

       <hr />

      making sample nav bar :
      {/* import navbar from './navbar';  */}
      {/* this places navbar here */}
      <Navbar/>

      <hr />
      creating a function that accepts some value: <br />
      <NameFunction passedName="Suhail" anotherWay="Sharieff"/>
      {/* this would pass "Suhail" to nameFunction.js */}
      <hr />
      

    </div>
  );
}

export default App;
