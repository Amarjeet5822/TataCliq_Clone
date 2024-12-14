import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosHeartEmpty } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import Categories from './Categories'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function BottomNav() {
  const [count, setCount] = useState(0)
  const [categoryPopup, setCategoryPopup ] = useState(false);
  const images = ["Products", "Categories", "Brands"]
  const { showTopBar : isScroll} = useSelector((state) => state.navScroll)
  const navigate = useNavigate()



  const incrementHandler = () => {
    setCount((prev) => prev < images.length - 1 ? prev + 1 : 0)
  }
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      incrementHandler()
    }, 2000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='flex h-full w-full justify-between items-center gap-5'>
      <div className='w-90 flex gap-5 h-full font-semibold'>
        <div onMouseEnter={()=>setCategoryPopup(true)}
        className='h-full w-3/5 flex items-center justify-center hover:bg-white hover:text-black' >
          Categories<IoIosArrowDown className="text-xl mt-1" />
          { categoryPopup && <Categories setPopup={setCategoryPopup} /> }  
        </div>
        <div className='h-full w-2/5  flex items-center justify-center hover:bg-white hover:text-black'>
          Brands<IoIosArrowDown className="text-xl mt-1" />
        </div>
      </div>
      <div className='w-full flex gap-5'>
        <div className='w-full'>
          <input className='w-full bg-customGray pl-5 py-2 text-gray-300 outline-none rounded-md'
            type="text" name="" id="" placeholder={`Search for ${images[count]}`} />
          <IoSearchOutline  className={`absolute right-[60%] ${isScroll ? "top-[70%]" : "top-[53%] "} transition transform -translate-y-1/2 text-gray-400`} />
        </div>
        <div className='w-36 flex justify-between  items-center' >
          <div >
            <IoIosHeartEmpty onClick={()=> navigate('myWishlist')} className='text-2xl ml-5 transition-transform duration-500 hover:scale-125'/>
          </div>
          <div>
            <HiOutlineShoppingBag onClick={()=> navigate('productCart')} className='text-2xl mr-5 transition-transform duration-500 hover:scale-125 ' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BottomNav