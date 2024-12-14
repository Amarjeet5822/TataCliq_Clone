import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <Link to="/productList">
      <div
        className="max-w-screen-2xl mx-auto relative box-border min-h-96 max-h-fit mb-10">
        <div>
          <img src={`Images/${images[count]}`} alt={images[count]} className="w-full h-full object-cover" />
        </div>
        <button className="absolute top-[20%] sm:top-[30%] md:top-[30%] lg:top-[42%] left-4 transform -translate-y-1/2 text-5xl font-thin rounded-full  shadow hover:scale-105 transition text-gray-500 size-16 bg-lightGray bg-opacity-60"
          onClick={decrementHandler}>˂</button>
        <button className="absolute top-[20%] sm:top-[30%] md:top-[30%]  lg:top-[42%] right-4 transform -translate-y-1/2 shadow hover:scale-105 transition  size-16 rounded-full text-5xl font-thin text-gray-500 bg-lightGray bg-opacity-60"
          onClick={incrementHandler}>˃</button>

      </div>
    </Link>

  )
}


export default MainSlider