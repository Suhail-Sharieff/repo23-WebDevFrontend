import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//theres a class with id 'root' in ./src.index.html
const root=createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//create class named root in src/index.html
//create App.jsx and add all shit u want to add using refce
//in main.jsx, under root, render App.jsx
