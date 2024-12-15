import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RiDeleteBinLine } from "react-icons/ri";

function MyWishlist() {
  const [wishList, setWishList] = useState([]);
  const { showTopBar } = useSelector((state) => state.navScroll)

  const addToCart = (item) => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || []
    localStorage.setItem("cartProducts", JSON.stringify([...products, item ]))
  }
  const deleteHandler = useCallback((id) => {
    const products = JSON.parse(localStorage.getItem("cartProducts")) || []
    const filteredProducts = products.filter(item => item.id !== id)
    setWishList(filteredProducts);
    localStorage.setItem("cartProducts", JSON.stringify(filteredProducts))

  },[wishList])

  useEffect(() => {
    const wishProducts = JSON.parse(localStorage.getItem("wishProducts")) || []
    setWishList(wishProducts)
  }, [])
  if (wishList.length === 0) {
    return <div className='w-full flex justify-center items-center font-semibold '>Empty WishList</div>
  }
  return (
    <>
      <div className={`sticky bg-white max-w-screen-xl mx-auto   ${showTopBar ? "top-[100px]" : "top-[60px]"} h-20 left-0 right-0 px-2 flex items-center `}>
        <div >
          <p className="text-gray-900 text-3xl font-bold tracking-wide">
            My Wishlist
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto p-10 flex flex-wrap gap-5 justify-center '>

        {
          wishList.map((data) => {
            return <div className='flex flex-col gap-5 justify-center shadow-lg rounded-lg mb-10' >
              <div>
                <img src={data.image} alt={data.category} className='w-full h-40' />
              </div>
              <div className='flex flex-col pb-3 '>
                <p className='font-semibold text-center'>{`${data.title.substring(0, 26)}...`}</p>
                <p className='text-gray-600 text-center' >{data.category}</p>
                <p className='font-semibold pl-2 text-left'>{`Price : ${data.price}`}</p>
              </div>
              <div className='text-center'>
                <button onClick={() => addToCart(data)}
                  className='w-full rounded-lg py-1 bg-red-500 inline'>Add to Cart</button>
                <button onClick={() => deleteHandler(data.id)} className='align-bottom'>
                  <RiDeleteBinLine className='text-2xl ml-2 transition-transform duration-500 hover:scale-125' /></button>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default MyWishlist