import {IProduct} from '@/types/ICardProductProps';
import {createAction} from '@reduxjs/toolkit';

export const addProduct = createAction<any>('ADD_PRODUCT');
export const GetProductId = createAction<any>('GET_PRODUCT_ID');
export const addProductInfo = createAction<any>('ADD_PRODUCT_INFO');
export const addProductImages = createAction<any>('ADD_PRODUCT_IMAGES');
export const addProductLocation = createAction<any>('ADD_PRODUCT_LOCATION');
export const addItem = createAction<string>('ADD_ITEM');
export const removeItem = createAction<any>('REMOVE_ITEM');
export const filterItems = createAction<any>('FILTER_ITEMS');
export const productsWithOutFilters = createAction<any>(
  'PRODUCTS_WITH_OUT_FILTERS',
);
export const currentSearch = createAction<string>('CURRENT_SEARCH');
export const currentStep = createAction<{step: number}>('CURRENTE_STEP');
export const removeProduct = createAction<any>('REMOVE_PRODUCT');
export const removeProductModal = createAction<boolean>('REMOVE_PRODUCT_MODAL');
export const topSearches = createAction<any>('TOP_SEARCHES');
export const topSearchesFilter = createAction<string>('TOP_SEARCHES_FILTER');
export const allFilterSelected = createAction<any>('ALL_FILTER_SELECTED');
export const deleteFilterSelected = createAction<string>(
  'DELETE_FILTER_SELECTED',
);
export const clearFiltersSelecteds = createAction('CLEAR_FILTERS_SELECTEDS');
export const getAllProducts = createAction('GET_ALL_PRODUCTS');
export const getProductSelected = createAction<IProduct>(
  'GET_PRODUCT_SELECTED',
);
export const currentPhoto = createAction<string>('CURRENT_PHOTO');

export const searchMobile = createAction<boolean>('SEARCH_MOBILE');

/* 
  searchMobile serve para controlar o fluxo do search na parte mobile
  fechando os componentes de modal e indo pra pagina dos filtros 
*/

export const readAnimalRequest = createAction('PRODUCT/READ_ANIMAL_REQUEST');

export const readAnimalSuccess = createAction<any>(
  'PRODUCT/READ_ANIMAL_SUCCESS',
);

export const readBreedRequest = createAction<string>(
  'PRODUCT/READ_BREED_REQUEST',
);

export const readBreedSuccess = createAction<any>('PRODUCT/READ_BREED_SUCCESS');

export const setVisibilityModalAddProduct = createAction<any>(
  'PRODUCT/SET-VISIBILITY-MODAL-ADD-PRODUCT',
);

export const readAgeCategoriesRequest = createAction(
  'PRODUCT/AGE_CATEGORIES_REQUEST',
);

export const readAgeCategoriesSuccess = createAction<any>(
  'PRODUCT/AGE_CATEGORIES_SUCCESS',
);

export const readClassificationsRequest = createAction(
  'PRODUCT/AGE_CLASSIFICATIONS_REQUEST',
);

export const readClassificationsSuccess = createAction<any>(
  'PRODUCT/AGE_CLASSIFICATIONS_SUCCESS',
);

export const readSaleTypeRequest = createAction('PRODUCT/SALE_TYPE_REQUEST');

export const readSaleTypeSuccess = createAction<any>(
  'PRODUCT/SALE_TYPE_SUCCESS',
);
