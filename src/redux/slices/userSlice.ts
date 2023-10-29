import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserType{
    uid: string,
    email: string,
    displayName: string,
    photoURL: string,            
}
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