import { createReducer } from "@reduxjs/toolkit";
import {
  addProductInfo,
  addProductLocation,
  addProductImages,
  addItem,
  removeItem,
  filterItems,
  productsWithOutFilters,
  currentSearch,
  searchMobile,
  currentStep,
} from "./actions";

import { initialState } from "./initial";

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductInfo, (state, action) => {
      state.productInfo = action.payload;
    })
    .addCase(addProductImages, (state, action) => {
      state.productImages = action.payload;
    })
    .addCase(addProductLocation, (state, action) => {
      state.productLocation = action.payload;
    })
    .addCase(addItem, (state, action) => {
      state.lastSearchs.unshift(action.payload);
    })
    .addCase(removeItem, (state, action) => {
      state.lastSearchs = state.lastSearchs.filter(
        (item: string) => item !== action.payload
      );
    })
    .addCase(filterItems, (state, action) => {
      const filtro = action.payload.toLowerCase();
      state.allProducts = state.allProducts.filter((item: string) => {
        return Object.values(item).some(
          (value) =>
            typeof value === "string" && value.toLowerCase().includes(filtro)
        );
      });
    })
    .addCase(productsWithOutFilters, (state, action) => {
      state.allProducts = initialState.allProducts;
    })
    .addCase(searchMobile, (state, action) => {
      state.searchMobile = !action.payload;
    })
    .addCase(currentSearch, (state, action) => {
      state.currentSearch = action.payload;
    })
    .addCase(currentStep, (state, action) => {
      state.currentStep = action.payload.step;
    });
});
