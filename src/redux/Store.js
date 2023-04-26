import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category-Slice";
import UserSlice from "./User-Slice";

const store = configureStore({
    reducer: {
        category: CategorySlice,
        user: UserSlice,
    }
});

export default store;