import {createReducer} from '@reduxjs/toolkit';
import {signIn} from './actions';

import {initialState} from './initial';

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn, (state, action) => {
    console.log(action);
  });
});
