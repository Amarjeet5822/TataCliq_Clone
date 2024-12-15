import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({ data }) {
  const navigate = useNavigate()
  return (
    <div 
    onClick={()=> navigate(`${data.id}`)}
    className='flex flex-col gap-5 justify-center shadow-lg rounded-lg mb-10' >
      <div>
        <img src={data.image} alt={data.category} className='w-full h-40' />
      </div>
      <div className='flex flex-col pb-3 '>
        <p className='font-semibold text-center'>{`${data.title.substring(0,26)}...` }</p>
        <p className='text-gray-600 text-center' >{data.category}</p>
        <p className='font-semibold pl-2 text-left'>{`Price : ${data.price}`}</p>
      </div>
    </div>
  )
}

export default ProductCard