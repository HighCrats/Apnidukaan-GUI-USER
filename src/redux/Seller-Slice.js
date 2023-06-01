import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiPoint from '../api/Web-Api';

export const fetchSellerProduct = createAsyncThunk("product/fetchSellerProduct", async (productId) => {
    let response = await axios.get(apiPoint.SELLER_PRODUCT,{productId});
    if (response.data.status)
        return response.data.result;
});

const SellerSlice = createSlice({
    name: 'seller',
    initialState: {
        sellerProductList: [],
        error: null
    },
    reducers:{
        setSellerProductList: (state,action)=>{
            state.sellerProductList = action.payload;
        }
    }
});

export const {setSellerProductList} = SellerSlice.actions;

export default SellerSlice.reducer;