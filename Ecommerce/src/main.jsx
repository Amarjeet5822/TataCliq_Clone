import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './RTK/store/store.js';
import Section from './MainContent/Section.jsx';
import ProductCard from './pages/ProductCard.jsx';
import MyWishlist from './pages/MyWishlist.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import AuthLayout from './components/auth/AuthLayout.jsx';
import RegistrationPage from './components/Navbar/RegistrationPage.jsx';
import MyCart from './pages/MyCart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* // public  */}
      <Route path='' element={< Section />} />
      <Route path='login' element={< RegistrationPage />} />
            
      {/* { protected part} */}
      <Route element={<AuthLayout />}>
        <Route path='productCart' element={< MyCart />} />
        <Route path='myWishlist' element={< MyWishlist />} />
        <Route path='productList' element={<ProductList />} />
        <Route path='productList/:productId' element={<ProductDetails />} />
      </Route>

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)

