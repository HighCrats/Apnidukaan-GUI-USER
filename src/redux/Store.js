import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import ProductSlice from "./Product-Slice";
import UserSlice from "./User-Slice";
const store = configureStore({
    reducer: {
        category: CategorySlice,
        product : ProductSlice,
        user: UserSlice,
    }
});

export default store;