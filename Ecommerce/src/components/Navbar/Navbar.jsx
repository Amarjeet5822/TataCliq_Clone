import React, { useEffect, useState } from 'react'
import TataImage from './TataImage'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(true);

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY + 5) {
      setShowTopBar(false);
    } else if (currentScrollY < lastScrollY - 5) {
      setShowTopBar(true);
    }

    setLastScrollY(currentScrollY);
    setScrolling(false);
  };

  useEffect(() => {
    const debouncedScroll = () => {
      if (!scrolling) handleScroll();
    };
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [scrolling, lastScrollY]);

  return (

    <div className={`w-full ${showTopBar ? "h-25" : "h-16"} ease-in-out transition-all duration-300 sticky top-0 z-10 box-border bg-stone-800 border-t-white`}>
      
      <div className='w-4/5 mx-auto flex gap-5  '>
        <div className={` transition-all w-36 h-full mr-8 ${showTopBar? "mt-8":"mt-4"}`}>
          <TataImage />
        </div>
        <div className='flex flex-col '>
          <div>
            { showTopBar? <TopNav /> : ""}
          </div>
           <BottomNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar;

{/* <div className='grid grid-cols-12 items-baseline gap-3'>
  <div className='col-span-2' >
    category
  </div>
  <div className='col-span-2'>
    brand
  </div>
  <div className='col-span-6'>
    searchBar
  </div>
  <div className='col-span-2' >
    bag
  </div>
</div> */}