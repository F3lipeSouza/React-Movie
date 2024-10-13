import { createSlice } from "@reduxjs/toolkit"


const InitialState = {
    movie:{}
}

export const MovieSLice = createSlice({
    name:'Movies',
    InitialState,
    reducers: {}
})

export default MovieSLice.reducer;