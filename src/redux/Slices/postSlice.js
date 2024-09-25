import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
    posts: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null
};

// Create an async thunk for fetching posts
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // You can define synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default postsSlice.reducer;
