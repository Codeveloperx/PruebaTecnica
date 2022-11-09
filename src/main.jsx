import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Table from './components/Table'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Table/>
  </React.StrictMode>
)
