import React from 'react'
import TataImage from './TataImage'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

function Navbar() {
  return (
    <div className='w-screen h-24 bg-stone-800 border-t-white'>
      <div className='min-w-2xl h-24 w-4/5 m-auto text-white flex justify-between gap-10'> 
        <TataImage />
        <div className='w-full h-full flex flex-col '>
          {/* <TopNav /> */}
          {/* <BottomNav /> */}
          <div className='grid grid-cols-12 items-baseline gap-3'>
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
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar;
