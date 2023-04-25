import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiPoint from '../api/Web-Api';

export const fetchCategory = createAsyncThunk("category/fetchCategory", async () => {
    let response = await axios.get(apiPoint.CATEGORY_LIST);
    return response.data;
});

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryList: [],
        error: null,
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchCategory.fulfilled, (state, action) => {
            state.categoryList = action.payload.categories;
            state.isLoading = false;
        }).addCase(fetchCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Error";
        })
    }
});

export default CategorySlice.reducer;