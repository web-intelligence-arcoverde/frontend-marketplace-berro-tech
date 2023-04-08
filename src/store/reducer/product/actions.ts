import { createAction } from "@reduxjs/toolkit";

export const addProduct = createAction<any>("ADD_PRODUCT");
export const addProductInfo = createAction<any>("ADD_PRODUCT_INFO");
export const addProductImages = createAction<any>("ADD_PRODUCT_IMAGES");
export const addProductLocation = createAction<any>("ADD_PRODUCT_LOCATION");
export const addItem = createAction<string>("ADD_ITEM");
export const removeItem = createAction<any>("REMOVE_ITEM");
export const filterItems = createAction<any>("FILTER_ITEMS");
export const productsWithOutFilters = createAction("PRODUCTS_WITH_OUT_FILTERS");
export const currentSearch = createAction<string>("CURRENT_SEARCH");
export const currentStep = createAction<{ step: number }>("CURRENTE_STEP");
export const removeProduct = createAction<any>('REMOVE_PRODUCT')
export const removeProductModal = createAction<boolean>('REMOVE_PRODUCT_MODAL')
export const topSearches = createAction<any>('TOP_SEARCHES')
export const topSearchesFilter = createAction<string>('TOP_SEARCHES_FILTER')

export const searchMobile = createAction<boolean>("SEARCH_MOBILE");
/* 
  searchMobile serve para controlar o fluxo do search na parte mobile
  fechando os componentes de modal e indo pra pagina dos filtros 
*/
