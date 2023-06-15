import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import ProductSlice from "./Product-Slice";
import UserSlice from "./User-Slice";
import CartSlice from "./Cart-Slice";
import DescriptionSlice from "./Description-Slice";
import SellerSlice from "./Seller-Slice";
import RequestSlice from "./Request-Slice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        product: ProductSlice,
        user: UserSlice,
        cart: CartSlice,
        descProduct : DescriptionSlice,
        sellerProduct : SellerSlice,
        requestProduct : RequestSlice
    }
});

export default store; 