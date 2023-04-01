import {createAction} from '@reduxjs/toolkit';
import {IRegisterUserProps, ISignIn} from './types';

export const signUpRequest = createAction('user/sign-up-request');
export const signUpSuccess = createAction('user/sign-up-success');

export const signInRequest = createAction<ISignIn>('user/sign-in-request');
export const signInSuccess = createAction<{token: string}>(
  'user/sign-in-success',
);

export const addProduct = createAction<any>('ADD_PRODUCT');
export const addUser = createAction<IRegisterUserProps>('ADD_USER');
export const addPassword = createAction<IRegisterUserProps>('ADD_PASSWORD');
export const loginSignProvider = createAction<any>('LOGIN_SIGN_PROVIDER');



