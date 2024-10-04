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

const router = createBrowserRouter([
  {
    path: "/",
    element: (<_02_Home/>),
  },
  {
    path: "/about",
    element:(<_03_About/>),
  },
  {
    path: "/services",
    element:(<_04_Services/>),
  },
  // now supoose u want to pass data 
  {
    // path:"/user/:id",
    //default ill give 786
    path:"/user/786",
    element:(<_05_User/>),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
