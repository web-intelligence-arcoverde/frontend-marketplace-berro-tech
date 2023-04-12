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
  removeProduct,
  removeProductModal,
  topSearches,
  topSearchesFilter,
  allFilterSelected,
  deleteFilterSelected,
  clearFiltersSelecteds,

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
      state.allProducts = action.payload
    })
    .addCase(searchMobile, (state, action) => {
      state.searchMobile = !action.payload;
    })
    .addCase(currentSearch, (state, action) => {
      state.currentSearch = action.payload;
    })
    .addCase(currentStep, (state, action) => {
      state.currentStep = action.payload.step;
    })
    .addCase(removeProduct, (state, action) => {
      state.allProducts = state.allProducts.filter(
        (item: any) => item.id !== action.payload
        
      );

    })
    .addCase(removeProductModal, (state, action) => {
      state.removeProductModal = !action.payload;
    })
    .addCase(topSearches, (state, action) => {
      state.topSearches = action.payload;

    })
    .addCase(topSearchesFilter, (state, action) => {
      state.topSearchesFilter = action.payload;

    })
    .addCase(allFilterSelected, (state, action) => {
      if (action.payload && action.payload.length > 0) {
        action.payload.forEach((item: string) => {
          if (!state.allFilterSelected.includes(item)) {
            state.allFilterSelected = [...state.allFilterSelected, item];
          }
        });
      }
    })
    .addCase(deleteFilterSelected, (state, action) => {
      state.allFilterSelected = state.allFilterSelected.filter(
        (item: string) => item !== action.payload
      );
    })
    .addCase(clearFiltersSelecteds, (state, action) => {
      state.allFilterSelected = [];

    })
});
