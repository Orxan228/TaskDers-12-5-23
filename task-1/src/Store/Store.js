import { configureStore } from "@reduxjs/toolkit/dist";
import cartReducer from './cardSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default store;