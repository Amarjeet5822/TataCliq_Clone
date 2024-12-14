import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showTopBar: true,
  lastScrollY: 0,
}

const navScrollSlice = createSlice({
  name:"navScroll",
  initialState,
  reducers: {
    setShowTopBar : (state, action) => { 
      state.showTopBar = action.payload;
    },
    setLastScrollY: (state, action ) => {
      state.lastScrollY = action.payload;
    }
  }
}) 

export default navScrollSlice.reducer;

export const { setShowTopBar, setLastScrollY } = navScrollSlice.actions















