import React, { useEffect, useState } from 'react'
//imp to pass params:
import { useParams } from 'react-router-dom'

function _05_User() {
    //IMP:
    const {id}=useParams()//this will import the id

    //lets say i wanna display my github followers
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Suhail-Sharieff")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return (
    <div>
        {/* {http://localhost:5173/user/1} */}
        Hola ur id is {id} and u have {data.followers} followers on github
        <div className="img">
            Your image is 
            <img src={data.avatar_url} alt="" />
        </div>
    </div>
  )
}

export default _05_User