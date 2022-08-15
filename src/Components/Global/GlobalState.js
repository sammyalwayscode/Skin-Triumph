import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  cart: [],
  qty: 0,
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

    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((ell) => ell._id === payload._id);

      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
      state.qty += 1;
    },
  },
});

export const { createAdmin, signOut, addToCart } = GlobalState.actions;

export default GlobalState.reducer;
