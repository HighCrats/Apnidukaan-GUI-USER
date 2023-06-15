import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'request',
    initialState:{
        requestProduct: []
    },
    reducers:{
        setRequestProduct: (state,action)=>{
            state.requestProduct = action.payload;
        }
    }
});

export const {setRequestProduct} = slice.actions;

export default slice.reducer;