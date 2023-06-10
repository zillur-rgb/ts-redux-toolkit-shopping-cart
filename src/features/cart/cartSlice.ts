import {
  PayloadAction,
  Slice,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ICartState {
  items: {
    [id: string]: number;
  };
}

const initialState: ICartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: any, action: PayloadAction<string>) {
      const id = action.payload;
      console.log("state", state);

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getMemoizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }

    return numItems;
  }
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
);
