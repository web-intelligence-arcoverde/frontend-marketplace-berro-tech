import { createReducer } from "@reduxjs/toolkit";
import {
  addProduct,
  addProductInfo,
  addProductLocation,
  addProductImages,
} from "./actions";

import { initialState } from "./initial";




export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductInfo, (state, action) => {
      state.productInfo = action.payload
    })
    .addCase(addProductImages, (state, action) => {
      state.productImages = action.payload
    })
    .addCase(addProductLocation, (state, action) => {
      state.productLocation = action.payload
    })
});
