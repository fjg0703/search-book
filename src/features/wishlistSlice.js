import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            console.log(action)
            state.wishlist.push(action.payload)
        },

        deleteFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(e => e !== action.payload)
            
        }
    }

})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

