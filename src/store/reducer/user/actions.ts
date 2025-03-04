/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction } from '@reduxjs/toolkit';
import { IRegisterUserProps } from './types';

export const addUser = createAction<IRegisterUserProps>('ADD_USER');
export const addPassword = createAction<IRegisterUserProps>('ADD_PASSWORD');

export const loginSignProvider = createAction<any>('LOGIN_SIGN_PROVIDER');

export const showModalEditUser = createAction<any>('user/show-modal-edit-user');

export const setStepEditUser = createAction<number>('user/set-step-edit-user');

export const hideModalEditUser = createAction('user/hide-modal-edit-user');

export const editUserInfo = createAction('user/edit-user-info');
export const editUserPassword = createAction('user/edit-user-password');
export const editUserLocation = createAction('user/edit-user-location');

export const readUserByIdRequest = createAction<any>(
  'USER/READ-USER-BY-ID-REQUEST'
);
export const readUserByIdSuccess = createAction<any>(
  'USER/READ-USER-BY-ID-SUCCESS'
);
