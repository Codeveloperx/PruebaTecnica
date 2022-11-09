import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import DetalleDepartment from './DetalleDepartment'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Table/>
        <DetalleDepartment/>
    </>
  )
}

export default Home