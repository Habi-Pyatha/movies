import { configureStore } from "@reduxjs/toolkit";
import  reviewReducer from './reviewSlice'
// import reviewSlice from "./reviewSlice";
import movieReducer from './movieSlice'
const store=configureStore({
    reducer:{
        movies:movieReducer,
        reviews:reviewReducer
    }
})
export default store;