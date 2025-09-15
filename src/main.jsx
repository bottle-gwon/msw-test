import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { worker  } from './mocks/browser.js'

if(import.meta.env.MODE  === 'development') {
  worker.start().then(() => {
    createRoot(document.getElementById('root')).render(
    <App />
 
)
  })
}else{
  createRoot(document.getElementById('root')).render(
    <App />
 
)
}
