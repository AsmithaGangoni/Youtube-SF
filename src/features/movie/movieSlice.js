import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    award: null,
    hindi: null,
    thriller: null,
    telugu: null,
    horror: null,
  };
  
  const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.award = action.payload.award;
        state.hindi = action.payload.hindi;
        state.thriller = action.payload.thriller;
        state.telugu = action.payload.telugu;
        state.horror = action.payload.horror;
      },
    },
  });

  export const { setMovies } = movieSlice.actions

export const selectAward = (state) => state.movie.award;
export const selectNewDisney = (state) => state.movie.hindi;
export const selectOriginal = (state) => state.movie.thriller;
export const selectTrending = (state) => state.movie.telugu;
export const selectHorror = (state) => state.movie.horror;

export default movieSlice.reducer;