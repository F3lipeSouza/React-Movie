import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { MovieSLice } from "./movieSlice";

export const store = configureStore({
    reducer:{
        Movies: MovieSLice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
})