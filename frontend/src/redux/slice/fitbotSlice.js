import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    chat: {
        message:"Hello, Hope you are doing well. How may I assist you?"
    },

}

export const fitbotAction = createAsyncThunk('chat', async (
    {githubUsername,githubRepo,questionAnswer},
    { rejectWithValue}
) => {
    try {
    
        const { data } = await axios.post("http://localhost:4004/interview/github", {
                githubUsername,
                githubRepo,
                questionAnswer
            }
        );

        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error?.message);
    }
})





const chatSlice = createSlice({
    name: "fitbotChat",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fitbotAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fitbotAction.fulfilled, (state, action) => {
            state.loading = false;
            state.chat = action.payload;
        });
        builder.addCase(fitbotAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});


const chatReducer = chatSlice.reducer;
export default chatReducer;