import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import moviesReducer from './slices/moviesSlice'
import configReducer from './slices/configSlice'
import gptReducer from './slices/gptSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
    gpt: gptReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch