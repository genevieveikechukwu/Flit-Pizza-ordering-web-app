import React from 'react'

const Select = () => {
  return (
    <label htmlFor="filter" className=' w-3/5 border border-gray-200 rounded-lg p-2'>
          <select name="filter" id="filter" className=' w-full'>
        <option value="Default Sorting" defaultValue={"Default Sorting"} className=''>Default Sorting</option>
          </select>
    </label>

  )
}

export default Select