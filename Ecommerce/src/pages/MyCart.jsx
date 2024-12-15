import React, { useEffect, useState } from 'react'

function MyCart() {
  const [cartProducts, setCartProducts ] = useState([])

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(data);
  },[])
  return (
    <div className='bg-[url(https://www.tatacliq.com/src/cart/components/img/PaymentIllustration.svg)] bg-cover bg-center mt-15 '>
  <div className='max-w-screen-lg mx-auto px-3 py-10 '>
    
  </div>
</div>

  )
}

export default MyCart