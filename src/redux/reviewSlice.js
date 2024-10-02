import { createSlice } from "@reduxjs/toolkit";

const initialState={
    descriptions:{},
    reviews:[]
}
const reviewSlice=createSlice({
    name:"reviews",
    initialState:initialState,
    reducers:{
        fetchReviews:(state,actions)=>{
            state.reviews=actions.payload
        },
        fetchDescriptions:(state,actions)=>{
            state.descriptions=actions.payload
        }
    }
    
})
export const {fetchReviews,fetchDescriptions}=reviewSlice.actions;
// export const {}=
export const selectReview=(state)=>state.reviews.reviews; //state.store.slice
export const selectDescription=(state)=>state.reviews.descriptions;
export default reviewSlice.reducer