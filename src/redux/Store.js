import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";

const store = configureStore({
    reducer: {
        category: CategorySlice
    }
});

export default store;