import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovieInfo: (state, {payload}) => {
      state.movie = payload;
    },
  },
});

export const { getMovieInfo } = MovieSlice.actions


export default MovieSlice.reducer
