import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      console.log({ state, action }, "<-----productslice");
      state.products = action.payload.map((product) => {
        return {
          id: product._id,
          title: product.title,
          price: product.price,
          categories: product.categories,
        };
      });
    },
    addProduct: (state, action) => {
      // console.log(action.payload, "<-----productslice");
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      console.log({ state, action }, "<-----productslice");
      const index = state.products.findIndex((prod) => prod.id === action.payload._id);
      state.products[index] = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { getAllProducts, addProduct, editProduct } = productSlice.actions;
