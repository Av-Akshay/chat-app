import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorization",
  initialState: {
    status: false,
    CurrentUser: null,
    chatId:"null",
    user:{}
  },
  reducers: {
    addUser: (state, action) => {
      state.status = true;
      state.CurrentUser = action.payload;
    },
    deleteUser: (state) => {
      state.status = false;
      state.CurrentUser = null;
    },
    changeUser: (state,action)=>{
      state.user= action.payload,
      state.chatId = state.CurrentUser.uid> action.payload.uid? state.CurrentUser.uid + action.payload.uid : action.payload.uid +  state.CurrentUser.uid

    }
  },
});
export const { addUser, deleteUser, changeUser} = authSlice.actions;
export default authSlice;
