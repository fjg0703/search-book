import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from "../features/wishlistSlice";


export default configureStore({
    reducer: {
        wishlist: wishlistReducer
    }
})

