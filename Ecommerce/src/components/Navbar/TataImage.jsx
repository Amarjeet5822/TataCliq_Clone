import React from 'react'
import { Link } from 'react-router-dom'
function TataImage() {
  return (
    <div>
      <Link to="/">
        <img src="https://www.tatacliq.com/src/general/components/img/TCF_logo.svg" alt="tata_logo" className='w-full' />
      </Link>
    </div>
  )
}

export default TataImage