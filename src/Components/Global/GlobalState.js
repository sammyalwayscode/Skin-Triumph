import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
};

const GlobalState = createSlice({
  name: "authState",
  initialState,
  reducers: {
    createAdmin: (state, { payload }) => {
      state.currentAdmin = payload;
    },
    signOut: (state) => {
      state.currentAdmin = null;
    },
  },
});

export const { createAdmin, signOut } = GlobalState.actions;

export default GlobalState.reducer;
