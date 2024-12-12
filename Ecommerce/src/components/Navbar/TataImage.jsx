import React from 'react'
import { Link } from 'react-router-dom'
function TataImage({ showTopBar }) {
  return (
    <div>
      <Link to="">
        <img src="/Images/TCF_logo.png" alt="tata_logo" className='w-full' />
      </Link>
    </div>
  )
}

export default TataImage