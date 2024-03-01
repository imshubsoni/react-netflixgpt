import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "Movie Details",
  initialState: {
    showMovieDetails: false,
    movie: null,
  },
  reducers: {
    initializeShowMovieDetails: (state) => {
      state.showMovieDetails = true;
    },
    hideShowMovieDetails: (state) => {
      state.showMovieDetails = false;
    },
    addMovieForShowDetails: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const {
  initializeShowMovieDetails,
  hideShowMovieDetails,
  addMovieForShowDetails,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
