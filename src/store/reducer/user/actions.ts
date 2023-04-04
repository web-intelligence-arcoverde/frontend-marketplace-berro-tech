import {createAction} from '@reduxjs/toolkit';
import {IRegisterUserProps} from './types';

export const addUser = createAction<IRegisterUserProps>('ADD_USER');
export const addPassword = createAction<IRegisterUserProps>('ADD_PASSWORD');
export const loginSignProvider = createAction<any>('LOGIN_SIGN_PROVIDER');

export const setVisibilityModalAddProduct = createAction<any>(
  'user/set-visibility-modal-add-product',
);

export const showModalEditUser = createAction<any>('user/show-modal-edit-user');

export const hideModalEditUser = createAction('user/hide-modal-edit-user');
