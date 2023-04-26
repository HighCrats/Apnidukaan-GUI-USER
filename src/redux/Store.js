import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import ProductSlice from "./Product-Slice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        product : ProductSlice
    }
});

export default store;