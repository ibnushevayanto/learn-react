import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    LOGIN(state) {
      state.isLogin = true;
    },
    LOGOUT(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
