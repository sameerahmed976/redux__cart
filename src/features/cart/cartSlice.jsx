import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const getFetchData = createAsyncThunk(
  "cart/getFetchData",
  async (name, thunkAPI) => {
    console.log(`* ~ file: cartSlice.jsx:18 ~ thunkAPI`, thunkAPI);
    console.log(`* ~ file: cartSlice.jsx:18 ~ name`, name);
    try {
      const res = await axios(url);
      return await res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        // console.log(acc, curr);

        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFetchData.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getFetchData.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});
// console.log(`* ~ file: cartSlice.jsx:14 ~ cartSlice`, cartSlice);

// {
//     [getFetchData.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getFetchData.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.cartItems = action.payload;
//     },
//     [getFetchData.rejected]: (state) => {
//       state.isLoading = true;
//     },
//   },

export default cartSlice.reducer;

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
