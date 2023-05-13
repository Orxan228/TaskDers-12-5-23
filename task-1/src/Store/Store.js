import cartReducer from './cardSlice'
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})  
export default store;   