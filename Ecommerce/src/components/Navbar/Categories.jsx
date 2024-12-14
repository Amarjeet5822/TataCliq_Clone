import React from 'react'
import {useSelector } from 'react-redux' 

function Categories({ setPopup }) {
  const { showTopBar: isScroll } = useSelector((state) => state.navScroll)
  return (
    <div onMouseLeave={() => setPopup(false)} className='max-w-5xl'>
      <div className={`absolute ${isScroll ? "top-24" : "top-13.8"} left-204 bg-white border font-normal text-base text-gray-900 p-4 mt-1 shadow-md mb-5`}>
        <div className="mb-3" >
          My account
        </div>
        <div className="mb-3">
          Order History
        </div>
        <div className="mb-3">
          Alerts & Coupon
        </div>
        <div className="mb-3">
          Gift Card
        </div>
        <div className="mb-3">
          CLiQ Cash
        </div>
        <div className="mb-3">
          Logout
        </div>

      </div>

    </div>

  )
}

export default Categories
