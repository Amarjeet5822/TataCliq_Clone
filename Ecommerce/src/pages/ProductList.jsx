import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setDataFromLocalStorage } from '../RTK/features/dataSlice'
import ProductCard from './ProductCard'

function ProductList() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)

  useEffect(() => {
    const localData = localStorage.getItem("products");
    if (localData) {
      dispatch(setDataFromLocalStorage(JSON.parse(localData)));
    } else {
      dispatch(fetchData());
    }

  }, [dispatch])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("products", JSON.stringify(items));
    }
  }, [items]);

  if (loading) {
    return <div className='max-w-screen-xl mx-auto flex justify-center items-center '>Loading...</div>
  }
  if (error) {
    return <div className='max-w-screen-xl mx-auto flex justify-center items-center '>error.message</div>
  }
  return (
    <div className='max-w-screen-xl mx-auto my-20 pb-2 '>
      <div className='text-3xl mb-10 text-center font-semibold'>All Products</div>
      <div className='max-w-5xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
          items?.map((item) => {
            return <ProductCard key={item.id} data={item} />
          })
        }
      </div>
    </div>
  )
}

export default ProductList