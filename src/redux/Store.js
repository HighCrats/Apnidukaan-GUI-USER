import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import ProductSlice from "./Product-Slice";
import UserSlice from "./User-Slice";
import CartSlice from "./Cart-Slice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        product: ProductSlice,
        user: UserSlice,
        cart: CartSlice
    }
});

export default store;