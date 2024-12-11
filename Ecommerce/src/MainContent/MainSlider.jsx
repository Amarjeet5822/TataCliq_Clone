import { useEffect, useState } from "react";

const images = ["slide.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide10.jpg"]

function MainSlider() {
  const [count, setCount] = useState(0);
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      incrementHandler();
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  const decrementHandler = () => {
    setCount((prev) => prev > 0 ? prev - 1 : images.length - 1)
  }
  const incrementHandler = () => {
    setCount((prev) => prev < images.length - 1 ? prev + 1 : 0)
  }
  return (
    <div className="w-full box-border  mb-10">
      <div className="w-full h-auto relative">
        <div>
          <img src={`Images/${images[count]}`} alt={images[count]} />
        </div>
        <div className=" w-full flex justify-between px-5 absolute top-40">
          <div>
            <button className="size-5 md:size-16  rounded-full text-5xl font-thin text-gray-500 bg-lightGray bg-opacity-60"
              onClick={decrementHandler}>˂</button>
          </div>
          <div>
            <button className="size-16 rounded-full text-5xl font-thin text-gray-500 bg-lightGray bg-opacity-60"
              onClick={incrementHandler}>˃</button>
          </div>

        </div>
      </div>

    </div>
  )
}


export default MainSlider