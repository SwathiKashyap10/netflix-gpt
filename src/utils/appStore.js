import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchTabSlice";
import searchResultReducer from "./searchResultSlice";
import inputTrakerReducer from "./inputTrakerSlice";
import tvShowsReducer from "./tvShowsSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer, 
            movies:moviesReducer,
            tvShows:tvShowsReducer,
            search:searchReducer,
            searchResult:searchResultReducer,
            inputTraker:inputTrakerReducer,
        },
        
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default appStore;