import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Life } from './domain/Life.js'

const life = new Life()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App life={life} />
  </React.StrictMode>,
)
