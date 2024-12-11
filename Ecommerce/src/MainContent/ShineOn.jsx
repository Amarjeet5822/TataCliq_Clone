import { useState } from 'react'

function ShineOn({ images, CategoryImage, headingImage, headingName, weddingWonders = "" }) {
  const [count, setCount] = useState(0);

  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(images.length - 4)
    }
  }
  const incrementHandler = () => {
    if (count < images.length - 4) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
  }
  return (
    <>

      <div className='w-4/5 mx-auto flex flex-col gap-5 py-2  mb-10'>
        <div>
          <div >
            <img src={headingImage} alt={headingName} />
          </div>
          <div className='pb-8 mb-6 w-full'>
            {weddingWonders ? <img src={weddingWonders} alt={headingName} /> : ""}
          </div>
        </div>
        <div className='flex justify-end place-items-center pr-2 gap-1' >
          <button className='text-4xl font-thin text-gray-400 bg-white pl-3 pr-1 rounded-s-full' onClick={decrementHandler}>˂</button>
          <button className='text-4xl font-thin text-gray-400 bg-white pr-3 pl-1 rounded-e-full' onClick={incrementHandler}>˃</button>
        </div>
        <div>
          <div className='flex gap-5 py-1  justify-center px-12'>
            <div className='w-68'>
              <img src={images[count]} alt={`${CategoryImage}-${count}`} className='rounded-md transition-transform duration-300 hover:scale-103 ' />
            </div>
            <div className='w-68'>
              <img src={images[count + 1]} alt={`${CategoryImage}-${count + 1}`} className='rounded-md transition-transform duration-300 hover:scale-103' />
            </div>
            <div className='w-68'>
              <img src={images[count + 2]} alt={`${CategoryImage}-${count + 2}`} className='rounded-md transition-transform duration-300 hover:scale-103' />
            </div>
            <div className='w-68'>
              <img src={images[count + 3]} alt={`${CategoryImage}-${count + 3}`} className='rounded-md transition-transform duration-300 hover:scale-103' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShineOn