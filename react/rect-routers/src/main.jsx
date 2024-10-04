import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import _01_Header from './Components/_01_Header.jsx'
import _02_Home from './Components/_02_Home.jsx'
import _03_About from './Components/_03_About.jsx'
import _04_Services from './Components/_04_Services.jsx'
import _05_User from './Components/_05_User.jsx'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import C1 from './Components/children/C1.jsx'
import C2 from './Components/children/C2.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<_02_Home/>),
  },
  {
    path: "/about",
    element:(<_03_About/>),
    children:[
      {
        path:"c1",
        element:<C1/>
      },
      {
        path:"c2",
        element:<C2/>
      },
    ]
  },
  {
    path: "/services",
    element:(<_04_Services/>),
  },
  // now supoose u want to pass data 
  {
    // path:"/user/:name",
    //default ill give 786
    path:"/user/:name",
    element:(<_05_User/>),
  },
  {
    //to handle unkown paths 
    path:"*",
    element:
    <div>
      <h1>404 Elemnt Not found</h1>
    </div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
