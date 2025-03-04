/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer } from '@reduxjs/toolkit';
import {
  addUser,
  addPassword,
  showModalEditUser,
  hideModalEditUser,
  setStepEditUser,
  readUserByIdSuccess
} from './actions';
import { initialState } from './initial';

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      const { name, email, phone } = action.payload;
      state.registerUser = {
        name,
        email,
        phone
      };
    })
    .addCase(addPassword, (state, action) => {
      const { password, confirmationPassword } = action.payload;
      state.registerUser = {
        ...state.registerUser,
        password,
        confirmationPassword
      };
    })

    .addCase(setStepEditUser, (state, action) => {
      state.step_edit_user = action.payload;
    })
    .addCase(showModalEditUser, (state, action) => {
      state.visibility_modal_edit_user = !state.visibility_modal_edit_user;
      state.user = state.visibility_modal_edit_user ? action.payload.user : {};
      state.step_edit_user = state.visibility_modal_edit_user
        ? action.payload.step
        : null;
    })
    .addCase(hideModalEditUser, (state, action) => {
      state.visibility_modal_edit_user = false;
    })
    .addCase(readUserByIdSuccess, (state, action) => {
      state.loading_user_by_id = false;
      state.user_by_id = action.payload;
    });
});
