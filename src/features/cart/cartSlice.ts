import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
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
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export function getNumeItems(state: RootState) {
  let numItems = 0;

  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }

  console.log("numItems", numItems);
  return numItems;
}
