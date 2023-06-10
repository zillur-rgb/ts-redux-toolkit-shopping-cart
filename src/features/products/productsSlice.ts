import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface IProductsState {
  products: { [id: string]: Product };
}

const initialState: IProductsState = {
  products: {},
};

const producsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;

      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receivedProducts } = producsSlice.actions;

export default producsSlice.reducer;
