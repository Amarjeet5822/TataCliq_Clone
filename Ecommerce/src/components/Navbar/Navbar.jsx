import React, { useEffect, useState } from 'react'
import TataImage from './TataImage'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import { useDispatch, useSelector } from 'react-redux'
import { setShowTopBar, setLastScrollY } from '../../RTK/features/navScrollSlice'

function Navbar() {
  const dispatch = useDispatch();
  const {showTopBar, lastScrollY }  = useSelector((state) => state.navScroll)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 5) {
      dispatch(setShowTopBar(false));
    } else if (currentScrollY < lastScrollY - 5) {
      dispatch(setShowTopBar(true));
    }

    dispatch(setLastScrollY(currentScrollY));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, dispatch]);

  return (

    <div className={`w-full ${showTopBar ? "h-25" : "h-16"} origin-top ease-in-out transition-all duration-300 sticky top-0 z-10 box-border bg-stone-800 text-white border-t-white`}>
      
      <div className='w-4/5 mx-auto flex h-full '>
        <div className={` transition-all w-36 h-full mr-8 ${showTopBar? "pt-8":"pt-4"}`}>
          <TataImage />
        </div>
        <div className='flex flex-col w-full transition '>
          { showTopBar? <TopNav /> : ""}        
          <div className="h-full flex items-center">
            <BottomNav isScroll={showTopBar} />
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default Navbar;

