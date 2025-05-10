import React from 'react'
import SvgFavourite from '../../components/common/SvgFavourite'
import { Link } from 'react-router-dom'

const ProductCard = ({id,title,description,price,discoutnt,rating,collection,thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 relative'>
      <Link to={`/product/${id}`}>
        <img className={`h-[280px] w-[350px]
         border rounded-lg cursor-pointer object-cover block`} src={thumbnail} alt={title}/>
         </Link>
         
         <div className='flex justify-between items-center'>
          <div className='flex flex-col pt-2'>
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-600'>{collection}</p>}
          </div>
          <div>
            <p>{price} BYN</p>
          </div>
        </div>
        <button onClick={()=> console.log("Click button")} className='absolute top-0 right-0 pt-4 pr-4 cursor-pointer'><SvgFavourite /></button>
    </div>
  )
}

export default ProductCard