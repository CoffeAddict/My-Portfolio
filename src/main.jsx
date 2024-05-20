import React from 'react'
import initializeGA from './ga4';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

initializeGA();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
