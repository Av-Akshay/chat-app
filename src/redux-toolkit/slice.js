import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authorization",
  initialState: {
    status: false,
    currentUser: null,
    chatId:"null",
    user:{}
  },
  reducers: {
    addUser: (state, action) => {
      state.status = true;
      state.currentUser = action.payload;
    },
    deleteUser: (state) => {
      state.status = false;
      state.currentUser = null;
    },
    changeUser: (state,action)=>{
      state.user= action.payload,
      state.chatId = state.currentUser.uid> action.payload.uid? state.currentUser.uid + action.payload.uid : action.payload.uid +  state.currentUser.uid

    }
  },
});
export const { addUser, deleteUser, changeUser} = authSlice.actions;
export default authSlice;
