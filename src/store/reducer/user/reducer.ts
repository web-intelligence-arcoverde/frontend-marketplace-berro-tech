import { createReducer } from "@reduxjs/toolkit";
import {
  addItem,
  signIn,
  removeItem,
  currentStep,
  addUser,
  addPassword,
  filterItems,
  productsWithOutFilters,
  currentSearch,
  searchMobile
} from "./actions";

import { initialState } from "./initial";

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => {
      console.log(action);
    })
    .addCase(addItem, (state, action) => {
      state.lastSearchs.unshift(action.payload);
    })
    .addCase(removeItem, (state, action) => {
      state.lastSearchs = state.lastSearchs.filter(
        (item) => item !== action.payload
      );
    })
    .addCase(currentStep, (state, action) => {
      state.currentStep = action.payload.step;
    })
    .addCase(addUser, (state, action) => {
      const { name, email, phone } = action.payload;
      state.registerUser = {
        name,
        email,
        phone,
      };
    })
    .addCase(addPassword, (state, action) => {
      const { password, repeatPassword } = action.payload;
      state.registerUser = {
        ...state.registerUser,
        password,
        repeatPassword,
      };
    })
    .addCase(filterItems, (state, action) => {
      const filtro = action.payload;
      state.allProducts = state.allProducts.filter(
        (item: { breed: string }) => item.breed.toLowerCase() === filtro
      );
    }).addCase(productsWithOutFilters,(state,action)=>{
      state.allProducts = initialState.allProducts
    }).addCase(currentSearch,(state,action)=>{
      state.currentSearch = action.payload
    }).addCase(searchMobile,(state,action)=>{
      state.searchMobile = !action.payload
    })
});
