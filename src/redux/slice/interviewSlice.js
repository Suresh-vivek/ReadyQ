import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    chat: {
        message:""
    },

}

export const interviewAction = createAsyncThunk('chat', async (
    {questionAnswer,level,stack},
    { rejectWithValue}
) => {
    try {

        console.log(questionAnswer, level, stack, "HI");
        
        const { data } = await axios.post("http://localhost:4004/interview/tech", {
            level,
            stack,
            questionAnswer
        });
        
        console.log(data);

        return data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error?.message);
    }
})


const interviewSlice = createSlice({
    name: "InterviewChat",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(interviewAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(interviewAction.fulfilled, (state, action) => {
            state.loading = false;
            state.chat = action.payload;
        });
        builder.addCase(interviewAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});


const interviewReducer = interviewSlice.reducer;
export default interviewReducer;