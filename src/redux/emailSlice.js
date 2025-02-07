import { createSlice } from "@reduxjs/toolkit";

const emailSlice=createSlice({
    name:"email",
    initialState:{email:""},
    reducers:{
        storeEmail:(state,action)=>{
            state.email=action.payload;
        },
        clearEmail:(state)=>{
            state.email="";
        },
    },
});

export const{storeEmail,clearEmail}=emailSlice.actions;
export default emailSlice.reducer;