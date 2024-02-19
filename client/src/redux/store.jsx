import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    productStore: ProductSlice,
  },
});

export default store;
