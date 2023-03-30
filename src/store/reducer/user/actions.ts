import {createAction} from '@reduxjs/toolkit';
import {IRegisterUserProps, ISignIn} from './types';

export const signUpRequest = createAction('user/sign-up-request');
export const signUpSuccess = createAction('user/sign-up-success');

export const signIn = createAction<ISignIn>('user/sign-in');

export const addItem = createAction<string>('ADD_ITEM');
export const removeItem = createAction<any>('REMOVE_ITEM');
export const addProduct = createAction<any>('ADD_PRODUCT');
export const currentStep = createAction<{step: number}>('CURRENTE_STEP');
export const addUser = createAction<IRegisterUserProps>('ADD_USER');
export const addPassword = createAction<IRegisterUserProps>('ADD_PASSWORD');
export const filterItems = createAction<any>('FILTER_ITEMS');
export const productsWithOutFilters = createAction('PRODUCTS_WITH_OUT_FILTERS');
export const currentSearch = createAction<string>('CURRENT_SEARCH');
export const loginSignProvider = createAction<any>('LOGIN_SIGN_PROVIDER');

/* 
  searchMobile serve para controlar o fluxo do search na parte mobile
  fechando os componentes de modal e indo pra pagina dos filtros 
*/
export const searchMobile = createAction<boolean>('SEARCH_MOBILE');
