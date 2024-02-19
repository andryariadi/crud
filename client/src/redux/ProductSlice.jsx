import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    ariadi: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      console.log({ state, action }, "<-----productslice");
      state.ariadi = action.payload.map((product) => {
        return {
          id: product._id,
          title: product.title,
          price: product.price,
          categories: product.categories,
        };
      });
    },
  },
});

export default productSlice.reducer;
export const { getAllProducts } = productSlice.actions;
