import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slice/fitbotSlice";

const store = configureStore({
    reducer:{
       fitbotChat : chatReducer,
    }
})

export default store;