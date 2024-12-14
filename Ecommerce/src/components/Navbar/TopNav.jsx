import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { SlBell } from "react-icons/sl";
import { CiGift } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import RegistrationPage from "./RegistrationPage";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../RTK/features/authSlice";
function TopNav() {
  const [showPopup, setShowPopup] = useState(false)
  const [showRegistrationPage, setShowRegistrationPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.isAuthenticated)

  const handleRegistrationPage = () => {
    setShowRegistrationPage(true);
  };

  return (
    <div className='bg-black text-white rounded-md flex justify-between items-center pl-5 h-10 text-xs font-bold tracking-wider py-5'>
      <div>
        <Link><span>Tata CLiQ Luxury </span></Link>
      </div>
      <div className="flex justify-between gap-7">
        <div>
          <Link><span>CLiQ Cash</span></Link>
        </div>
        <div>
          <Link><span>Gift Card</span></Link>
        </div>
        <div>
          <Link><span>CLiQ Care</span></Link>
        </div>
        <div>
          <Link><span>Track Orders</span></Link>
        </div>
        <div className="flex"
          onMouseEnter={() => setShowPopup(true)}>
          <div>
            {loggedIn ?
              (<div className="flex justify-center gap-2 ">
                <VscAccount className="text-xl" />
                <p><IoIosArrowDown className="text-xl" /></p>
              </div>)
              : "Sign in/Sign Up"}
          </div>
          <div onMouseLeave={() => setShowPopup(false)}>
            {showPopup && (
              <div className="absolute top-8 right-[10%] bg-gray-100 border font-normal text-base text-gray-900 border-gray-300 p-4 mt-1 shadow-md mb-5">
                <div className="mb-3" >
                  { !loggedIn? (
                    <div className="flex items-center justify-center">
                      <button onClick={handleRegistrationPage}
                    className="bg-red-500 rounded-full text-white text-center py-2 px-4">Login/Register</button>
                    {showRegistrationPage && <RegistrationPage />  }
                    
                    </div>
                  ) : ""}
                </div>
                <div className="mb-3" >
                  <VscAccount className="text-xl mr-4 inline" />
                  My account
                </div>
                <div  className="mb-3">
                  <HiOutlineShoppingBag className="text-xl mr-4 inline" />
                  Order History
                </div>
                <div  className="mb-3">
                  <SlBell className="text-xl mr-4 inline" />
                  Alerts & Coupon
                </div>
                <div  className="mb-3">
                  <CiGift className="text-xl mr-4 inline" />
                  Gift Card
                </div>
                <div  className="mb-3">
                  <RiMoneyRupeeCircleLine className="text-xl mr-4 inline" />
                  CLiQ Cash
                </div>
                <div  className="mb-3">
                  <CiSettings className="text-xl mr-4 inline" />
                  <button onClick={()=>{
                    dispatch(logout())
                    navigate("/")
                  } } className="outline-none">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default TopNav;
