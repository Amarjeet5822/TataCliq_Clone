import React from 'react'

function BewareFraud() {
  return (
    <div className='w-4/5 mx-auto shadow-custom rounded-2xl p-10 h-96 border-2 border-stone-200 flex justify-between items-center'>
      <div className='p-5 flex flex-col justify-between' >
        <p className='text-4xl font-bold text-gray-800 tracking-wide mb-3'>SHOP SMART & STAY SAFE</p>
        <p className='text-gray-800 text-2xl mb-10 '>Trust only Tata CLiQ's official channels for exclusive offers. We DO NOT make telemarketing calls, host lucky draws, send QR codes, or request payments outside our offical app or website.</p>
        <p className='text-2xl text-red-800'>CliQ to learn how you can enjoy a secure shopping experience.</p>
      </div >
      <div className="w-full mr-10 ">
        <img src="Images/bewareFraud.png" alt="fraudLogo" className='rounded-full w-full'/>
      </div>
    </div>
  )
}

export default BewareFraud