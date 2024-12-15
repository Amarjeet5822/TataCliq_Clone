import React, { useEffect, useState } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom'


function ProductDetails() {
  const { productId } = useParams();
  const [data, setProduct] = useState(null)
  const navigate = useNavigate()

  const addToWishlist = () => {
    const products = JSON.parse(localStorage.getItem("wishProducts")) || []
    localStorage.setItem("wishProducts", JSON.stringify([...products, data]))
    navigate('/myWishlist')
  }
  const addToCart = () => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || []
    localStorage.setItem("cartProducts", JSON.stringify([...products, data]))
    navigate('/productCart')
  }
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || []
    const singleProduct = products.find(item => item.id === parseInt(productId));
    if (singleProduct) {
      setProduct(singleProduct)
    }
  }, [productId])
  if (!data) {
    return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
  }
  return (
    <div className='my-10 max-w-5xl mx-auto'>
      <div className=' w-2/5 mx-auto m-5 p-4 flex flex-col gap-5 justify-center shadow-lg rounded-lg' >
        <div>
          <img src={data.image} alt={data.category} className='w-full h-72' />
        </div>
        <div className='flex flex-col pb-3  '>
          <p className='font-semibold text-center'>{data.title}</p>
          <p className='text-gray-600 text-center' >{data.category}</p>
          <p className='py-2 font-medium text-gray-800 '>{data.description}</p>
          <p className='font-semibold pl-2 text-left'>{`Price : ${data.price}`}</p>
          <p className='font-semibold pl-2 text-left'>{`rate: ${data.rating.rate}`}</p>

          <div className='text-center'>
            <button onClick={addToCart}
              className='w-1/2 rounded-lg py-1 bg-red-500 inline'>Add to Cart</button>
            <button onClick={addToWishlist} className='align-bottom'>
              <IoIosHeartEmpty className='text-2xl ml-2 transition-transform duration-500 hover:scale-125' /></button>
          </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails