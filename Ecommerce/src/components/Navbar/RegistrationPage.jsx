import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../RTK/features/authSlice';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [isContinue, setIsContinue] = useState(true);
  const mobileRef = useRef(null);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleInput = () => {
    const inp = mobileRef.current.value 
    if (inp && inp.length > 9) {
      setIsContinue(false);
    }else{
      setIsContinue(true)
    }
  }
  const handleSubmit =(e) => {
    e.preventDefault();
    dispatch(login())
    navigate("/");
  }

  return (
    <div className="fixed top-0  left-0  h-screen w-full bg-black/50 flex justify-center items-center ">
      <form onSubmit={handleSubmit} className='bg-white max-w-md  px-10 pt-10 pb-24 rounded-2xl flex flex-col justify-center items-center'>
        <div className='w-52 h-12'>
          <img src="https://www.tatacliq.com/src/mobile-number-login/images/TCF_logo_black.svg" alt="Tata logo" className='w-full h-full' />
        </div>
        <p className='text-center text-gray-500 mb-10'>Please enter your mobile number</p>
        <div className='text-left w-full border-b-2  mb-2  '>
          <p className='text-left text-gray-300'>mobile number</p>
          <span className='mr-5'>+91</span>
          <input type="text" ref={mobileRef} className='outline-none py-2 ' maxLength={10} onChange={handleInput} placeholder='Enter mobile number' />
        </div>
        <p className='text-center text-red-600 font-semibold mb-10'>Use Email Address</p>
        <div className='text-sm mb-10'>
          <p >This site is protected by reCAPTCHA and the Google <span className='text-red-500'>Privacy Policy</span> and <span className='text-red-500'>Terms of Service</span> apply.</p>
          <p>  By continuing, you agree to our <span className='text-red-500'>Terms of Use</span> and <span className='text-red-500'>Privacy Policy</span></p>
        </div>
        <button disabled={isContinue} className={`${isContinue ? "": "bg-red-500 text-white"} w-full rounded-lg text-center py-2 px-4`}>Continue</button>

      </form>
    </div>
  )
}

export default RegistrationPage