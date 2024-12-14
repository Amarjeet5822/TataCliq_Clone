import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function MyWishlist() {
  const [wishList, setWishList] = useState([]);
  const { showTopBar } = useSelector((state) => state.navScroll)
  useEffect(()=> {
    const wishProducts = JSON.parse(localStorage.getItem("wishProducts")) || []


  },[wishList])
  return (
    <>
      <div className={`sticky bg-white max-w-screen-xl mx-auto   ${showTopBar ? "top-[100px]" : "top-[60px]"} h-20 left-0 right-0 px-2 flex items-center `}>
        <div >
          <p className="text-gray-900 text-3xl font-bold tracking-wide">
            My Wishlist
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl '>

         {
          
          // <ProductCard  /> 
          
         }
      </div>
    </>
  )
}

export default MyWishlist