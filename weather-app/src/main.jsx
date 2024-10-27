/*Imports the StrictMode component from the React library*/
import { StrictMode } from 'react'
/*Imports the createRoot function from the React DOM library*/
import { createRoot } from 'react-dom/client'
/*Imports the main App component from the App.jsx file*/
import App from './App.jsx'
/*Imports the global CSS stylesheet*/
import './index.css'
/*Creates a root element and renders the App component within it*/
createRoot(document.getElementById('root')).render(
  /*Wraps the App component in a StrictMode to enable additional checks and warnings during development*/
  <StrictMode>
    <App />
  </StrictMode>,
)
