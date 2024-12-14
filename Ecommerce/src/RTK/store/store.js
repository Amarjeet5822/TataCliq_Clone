import { configureStore } from "@reduxjs/toolkit";
import navScrollReducer from "../features/navScrollSlice";
import authReducer from "../features/authSlice";
import productsReducer from "../features/dataSlice";

export const store = configureStore({
  reducer:{
    navScroll: navScrollReducer,
    auth: authReducer,
    products: productsReducer,

  } 
})