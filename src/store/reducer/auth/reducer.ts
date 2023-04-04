import {createReducer} from '@reduxjs/toolkit';
import {
  recoveryAccountSendEmailRequest,
  signInEmailSuccess,
  signOutSuccess,
  signUpEmailSuccess,
  confirmationVerificationCodeSuccess,
  changerPasswordSuccess,
  signUpGoogleSuccess,
  userLoggedInformationSuccess,
  userEditBasicInformationSuccess,
} from './actions';

import {initialState} from './initial';

export const auth = createReducer(initialState, (builder) => {
  builder
    .addCase(signInEmailSuccess, (state, action) => {
      state.token = action.payload.token.token;
      state.user = action.payload.user;
    })
    .addCase(signUpEmailSuccess, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(signOutSuccess, (state, action) => {
      state.token = '';
      state.user = {};
    })
    .addCase(recoveryAccountSendEmailRequest, (state, action) => {
      state.recoveryEmail = action.payload.email;
    })
    .addCase(confirmationVerificationCodeSuccess, (state, action) => {
      state.codeVerificationCode = action.payload.codeVerificationCode;
    })
    .addCase(changerPasswordSuccess, (state, action) => {
      state.codeVerificationCode = '';
      state.recoveryEmail = '';
    })
    .addCase(signUpGoogleSuccess, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.newUser;
    })
    .addCase(userLoggedInformationSuccess, (state, action) => {
      state.user = action.payload;
    })
    .addCase(userEditBasicInformationSuccess, (state, action) => {
      const {name, avatar_url, email, phone} = action.payload;
      state.user.name = name;
      state.user.name = name;
    });
});
