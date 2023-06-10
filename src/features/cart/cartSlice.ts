import { Slice, createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  items: {
    [productId: string]: number;
  };
}

const initialState: ICartState = {
  items: {},
};

const cartSlice: Slice<ICartState, {}, "cart"> = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
