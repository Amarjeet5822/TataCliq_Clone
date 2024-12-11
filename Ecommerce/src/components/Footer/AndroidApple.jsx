import React from 'react'
import { android, appleLink, facebook, instagram, linkedin, twitter, youTube } from '../../Links'

function AndroidApple() {
  return (
    <div className='w-full bg-lightGrayWeight h-24 py-5 mb-5 '>
      <div className='w-4/5 h-full mx-auto mb-10 flex justify-between items-center'>
        <div className='flex gap-2'>
          <p>Download App</p>
          <img src={android} alt="androidLogo" className='w-6 h-6' />
          <img src={appleLink} alt="appleLogo" className='w-6 h-6' />
        </div>
        <div className='flex gap-2'>
          <img src={facebook} alt="facebookLogo" className='w-5 h-5' />
          <img src={twitter} alt="twitterLogo" className='w-5 h-5' />
          <img src={instagram} alt="instagramLogo" className='w-5 h-5' />
          <img src={youTube} alt="youTubeLogo" className='w-5 h-5' />
          <img src={linkedin} alt="linkedinLogo" className='w-5 h-5' />
        </div>
        <div className='text-sm text-gray-700'>
          <p>© 2024 Tata CLiQ | All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default AndroidApple