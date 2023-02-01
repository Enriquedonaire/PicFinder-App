import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from "../features/imagesSlice";

export default configureStore({
    reducer: {
        imagesStore: imagesReducer
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  }),});
