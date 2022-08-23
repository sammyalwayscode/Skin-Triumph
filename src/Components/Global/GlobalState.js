import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  cart: [],
  qty: 0,
  totalPrices: 0,
  preOdered: null,
};

const GlobalState = createSlice({
  name: "authState",
  initialState,
  reducers: {
    createAdmin: (state, { payload }) => {
      state.currentAdmin = payload;
    },
    preOrderedDetail: (state, { payload }) => {
      state.preOdered = payload;
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
    clearCart: (state) => {
      state.cart = [];
    },
    resetPrice: (state) => {
      state.totalPrices = 0;
    },
    resetQty: (state) => {
      state.qty = 0;
    },
  },
});

export const {
  createAdmin,
  signOut,
  addToCart,
  removeFromCart,
  preOrderedDetail,
  clearCart,
  resetPrice,
  resetQty,
} = GlobalState.actions;

export default GlobalState.reducer;
