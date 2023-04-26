import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiPoint from '../api/Web-Api';

export const fetchProduct = createAsyncThunk("product/fetchProduct", async () => {
    let response = await axios.get(apiPoint.PRODUCT_LIST);
    if (response.data.status)
        return response.data.result;
});

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        error: null,
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.productList = action.payload;
            state.isLoading = false;
        }).addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Error";
        })
    }
});

export default ProductSlice.reducer;