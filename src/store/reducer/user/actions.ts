import { createAction } from "@reduxjs/toolkit";
import { IRegisterUserProps } from "./types";

interface ISignIn {
  email: string;
  password: string;
}

export const signIn = createAction<ISignIn>("user/sign-in");
export const addItem = createAction<string>("ADD_ITEM");
export const removeItem = createAction<any>("REMOVE_ITEM");
export const addProduct = createAction<any>("ADD_PRODUCT");
export const currentStep = createAction<{ step: number }>("CURRENTE_STEP");
export const addUser = createAction<IRegisterUserProps>("ADD_USER");
export const addPassword = createAction<IRegisterUserProps>("ADD_PASSWORD")
export const filterItems = createAction<any>('FILTER_ITEMS')
export const productsWithOutFilters = createAction<any>('PRODUCTS_WITH_OUT_FILTERS')

