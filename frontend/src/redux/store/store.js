import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slice/fitbotSlice";
import interviewReducer from "../slice/interviewSlice";

const store = configureStore({
    reducer:{
       fitbotChat : chatReducer,
       interView : interviewReducer,
    }
})

export default store;