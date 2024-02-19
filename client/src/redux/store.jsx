import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    andry: ProductSlice,
  },
});

export default store;
