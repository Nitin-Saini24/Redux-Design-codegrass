import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/Slices/countSlice';
import postsReducer from "./redux/Slices/postSlice";
// import userReducer from './redux/Slices/userSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
});