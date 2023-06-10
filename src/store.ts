import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cart/cartSlice";
import productsReducer from "../src/features/products/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

// infer the Rootstate and AppDospach types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// infer type: {posts: PostsState, comments: ComentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
