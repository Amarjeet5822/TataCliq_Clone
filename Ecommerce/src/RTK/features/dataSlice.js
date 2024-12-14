import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return data;
} )

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDataFromLocalStorage: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default productsSlice.reducer;
export const {setDataFromLocalStorage } = productsSlice.actions;