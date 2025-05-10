import React from 'react'

const categoriesData = [

]

const Categories = ({types}) => {
  return (
    <div >
      {types?.map(type=>{
        return (
          <div className='flex items-center p-1'>
          <input type='checkbox' name={type?.code} className='border rounded-xl w-4 h-4 text-black' style={{ accentColor: "#7F9441" }} 
/>
            <label htmlFor={type?.code} className='px-2 text-[14px] text-gray-600'>{type?.name}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Categories