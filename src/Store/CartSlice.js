import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalItems: 0,
  cartTotalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.cartTotalItems = action.payload.cartTotalItems;
      state.cartTotalAmount = action.payload.cartTotalAmount;
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalItems = 0;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.cartTotalItems++;
      state.cartTotalAmount = state.cartTotalAmount + newItem.price;
      state.changed = true;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const removeItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === removeItem.id
      );
      state.cartTotalItems--;
      state.cartTotalAmount = state.cartTotalAmount - removeItem.price;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== removeItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
