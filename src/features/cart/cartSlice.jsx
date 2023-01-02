import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});
// console.log(`* ~ file: cartSlice.jsx:14 ~ cartSlice`, cartSlice);

export default cartSlice.reducer;
