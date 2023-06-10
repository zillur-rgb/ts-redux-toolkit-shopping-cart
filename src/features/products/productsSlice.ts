import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export default producsSlice.reducer;
