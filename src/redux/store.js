import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import thunk from "redux-thunk";


const store=configureStore({
    reducer:{
        home:HomeSlice,
    },
    middleware:[thunk]

});

export default store;