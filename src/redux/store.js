import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { MovieSlice } from "./movieSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 