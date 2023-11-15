import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../utils/types';

export const userSlice = createSlice({
  name: 'user',
  initialState: null as UserType | null,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer