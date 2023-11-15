import { createSlice } from "@reduxjs/toolkit";
import { AllMovieType } from "../../utils/types";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    movieCache: {},
  } as AllMovieType,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addToMovieIdCache: (state, action) => {
      state.movieCache = action.payload;
    },
    removeFromMovieCache: (state) => {
      const keys = Object.keys(state.movieCache);
      delete state.movieCache[keys[0]];
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addToMovieIdCache, removeFromMovieCache } =
  moviesSlice.actions;

export default moviesSlice.reducer;