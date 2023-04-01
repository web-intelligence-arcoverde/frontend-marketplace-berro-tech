import {createReducer} from '@reduxjs/toolkit';
import {
  recoveryAccountSendEmailRequest,
  signInEmailSuccess,
  signOutSuccess,
  signUpEmailSuccess,
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
    });
});
