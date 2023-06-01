import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'description',
    initialState:{
        descProduct: null
    },
    reducers:{
        setDescProduct: (state,action)=>{
            state.descProduct = action.payload;
        }
    }
});

export const {setDescProduct} = slice.actions;

export default slice.reducer;
