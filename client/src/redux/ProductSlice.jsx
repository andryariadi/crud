import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      console.log({ state, action }, "<-----productslice1");
      state.products = action.payload.map((product) => {
        return {
          _id: product._id,
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
      console.log({ state, action }, "<-----productslice2");
      const index = state.products.findIndex((prod) => prod._id === action.payload._id);
      state.products[index] = action.payload;
    },
    deletingProduct: (state, action) => {
      console.log({ state, action }, "<-----productslice3");
      state.products = state.products.filter((products) => products._id !== action.payload._id);
    },
  },
});

export default productSlice.reducer;
export const { getAllProducts, addProduct, editProduct, deletingProduct } = productSlice.actions;
