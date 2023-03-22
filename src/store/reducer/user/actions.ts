import { createAction } from "@reduxjs/toolkit";

interface ISignIn {
  email: string;
  password: string;
}

export const signIn = createAction<ISignIn>("user/sign-in");
export const addItem = createAction<string>("ADD_ITEM");
export const removeItem = createAction<any>("REMOVE_ITEM");
export const addProduct = createAction<any>("ADD_PRODUCT")
export const currentStep = createAction<{step:number}>("CURRENTE_STEP")
