import React from 'react'
import TableCity from '../components/TableCity'

const DetalleDepartment = () => {
  return (
    <article className="block p-6 bg-white rounded-lg border border-gray-200 sm:mt-10 mb-8">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Departamento 1
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400 text-justif max-w-xl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam iure voluptatum vel nesciunt magni minus accusamus aut dolor aspernatur, magnam odio libero vitae minima, consequatur impedit vero omnis placeat ut!
    </p>

    <h5 className="font-bold text-lg mt-6">Ciudades</h5>
    <TableCity/>
  </article> 
  )
}

export default DetalleDepartment