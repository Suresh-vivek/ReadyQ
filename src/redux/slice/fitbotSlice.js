import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    chat: {
        message:""
    },

}

export const fitbotAction = createAsyncThunk('chat', async (
    {message},
    { }
) => {
    try {
        message = {
            githubUserName:"theMitocondria",
            githubRepo : "ReadyQ",
        }
        console.log(message);
        const { data } = await axios.post("http://localhost:4000/interview/github", {
            githubUsername:"theMitocondria",
            githubRepo : "ReadyQ",
        });



        console.log(data);

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