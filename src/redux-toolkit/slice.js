import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorization",
  initialState: {
    status: false,
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.status = true;
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});
export const { addUser, deleteUser } = authSlice.actions;
export default authSlice;
