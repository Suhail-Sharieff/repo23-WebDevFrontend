import React from 'react'
import _01_Header from './_01_Header'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function _03_About() {
  return (
    <div>
        <_01_Header/>
        this is About
       <div>
       <NavLink to={"/about/c1"} className={({isActive})=>isActive?"text-red-600":"text-black"}>Go to child 1</NavLink>
       </div>
       <div>
       <NavLink to={"/about/c2"} className={({isActive})=>isActive?"text-red-600":"text-black"}>Go to child 2</NavLink>
       </div>
       <Outlet/>

    </div>
  )
}

export default _03_About