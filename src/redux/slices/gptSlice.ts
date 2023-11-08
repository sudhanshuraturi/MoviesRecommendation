import { createSlice } from "@reduxjs/toolkit";
import { GptSliceType } from "../../utils/types";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieResults: null,
    movieNames: null,
  } as GptSliceType,
  reducers: {
   
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;