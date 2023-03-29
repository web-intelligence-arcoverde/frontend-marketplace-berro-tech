import { createAction } from "@reduxjs/toolkit";

export const addProduct = createAction<any>("ADD_PRODUCT");
export const addProductInfo = createAction<any>("ADD_PRODUCT_INFO");
export const addProductImages = createAction<any>("ADD_PRODUCT_IMAGES");
export const addProductLocation = createAction<any>("ADD_PRODUCT_LOCATION");

