import { createSlice } from "@reduxjs/toolkit";

const inputTrakerSlice = createSlice({
    name:"inputTracker",
    initialState:{
        inputValue:null,
    },
    reducers:{
        addInputValue:(state,action)=>{
            state.inputValue = action.payload;
        }
    }
});

export const {addInputValue} = inputTrakerSlice.actions;
export default inputTrakerSlice.reducer;