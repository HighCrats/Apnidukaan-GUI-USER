import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import ProductSlice from "./Product-Slice";
import UserSlice from "./User-Slice";
import CartSlice from "./Cart-Slice";
import DescriptionSlice from "./Description-Slice";
import CProductSlice from './product-category-slice'

const store = configureStore({
    reducer: {
        category: CategorySlice,
        product: ProductSlice,
        user: UserSlice,
        cart: CartSlice,
        descProduct : DescriptionSlice,
        categoryProduct :  CProductSlice
    }
});

export default store; 