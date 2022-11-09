import React from 'react'
import check from '../assets/check.svg'

const TableCity = () => {
  return (
    <table className="border-collapse w-full mt-4">
      <thead className="border-t border-b">
        <tr>
          <th className=" text-sm font-bold text-gray-900 px-6 py-4 text-left hidden sm:table-cell">
            <div className="flex items-center gap-2">
              <span>
                <img src={check} alt="see" width='12' />
              </span>
              ID
            </div>
            </th>
          <th className="text-sm font-bold text-gray-900 px-6 py-4 text-left hidden sm:table-cell">Nombre</th>
        </tr>
      </thead>

      <tbody>
        <tr
            className="bg-white sm:hover:bg-gray-100 flex sm:table-row flex-row sm:flex-row flex-wrap sm:flex-no-wrap mb-10 sm:mb-0">
          <td
            className="w-full sm:w-auto px-6 text-gray-800 border-b text-right sm:text-left block sm:table-cell relative sm:static pr-8">

            <span className="sm:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ID</span>
            <div className="flex justify-end items-center gap-2 sm:justify-start">
              <img src={check} alt="check" width={12} />
              {1}
            </div>
          </td>

          <td
            className="w-full sm:w-auto px-6 text-gray-800 border-b block sm:table-cell relative sm:static pr-8 text-right sm:text-left">
            <span className="sm:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Nombre</span>
            {'Ciudad 1'}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableCity