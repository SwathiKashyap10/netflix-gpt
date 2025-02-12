import { createSlice } from "@reduxjs/toolkit";


const tvShowsSlice = createSlice({
    name:"tvShows",
    initialState:{
        airingTodayShows:null,
        onTheAirShows:null,
        popularShows:null,
        topRatedShows:null,
    },
    reducers:{
        addAiringTodayShows:(state,action)=>{
            state.airingTodayShows = action.payload;
        },
        addOnTheAirShows:(state,action)=>{
            state.onTheAirShows = action.payload;
        },
        addPopularShows:(state,action)=>{
            state.popularShows = action.payload;
        },
        addTopRatedShows:(state,action)=>{
            state.topRatedShows = action.payload;
        }
    }
});

export const {addAiringTodayShows,addOnTheAirShows,addPopularShows,addTopRatedShows} = tvShowsSlice.actions;

export default tvShowsSlice.reducer;