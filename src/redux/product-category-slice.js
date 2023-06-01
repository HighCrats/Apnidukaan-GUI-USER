import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiPoint from '../api/Web-Api';

export const fetchProductsByCategory = createAsyncThunk(
  "product/fetchProductsByCategory",
  async (categoryName) => {
    console.log(categoryName);
  }
);

const CProductSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    error: null,
    isLoading: false
  },
 extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.pending, (state, action) => {
      state.isLoading = true;
    }).addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.isLoading = false;
    }).addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Error";
    })
  }
});

export default CProductSlice.reducer;