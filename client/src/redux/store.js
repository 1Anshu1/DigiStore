import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice.js";
import productReducer from "../redux/features/productSlice.js";
import wishlistReducer from "../redux/features/wishListSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
