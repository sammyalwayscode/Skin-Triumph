import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  cart: [],
  qty: null,
  totalPrices: 0,
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
      state.totalPrices += payload.price;
    },

    removeFromCart: (state, { payload }) => {
      const check = state.cart.findIndex((ell) => ell._id === payload._id);

      if (state.cart[check].qty > 1) {
        state.cart[check].qty -= 1;
      } else {
        state.cart = state.cart.filter((ell) => ell._id !== payload._id);
      }
      state.qty -= 1;
      state.totalPrices -= payload.price;
    },
  },
});

export const { createAdmin, signOut, addToCart, removeFromCart } =
  GlobalState.actions;

export default GlobalState.reducer;
