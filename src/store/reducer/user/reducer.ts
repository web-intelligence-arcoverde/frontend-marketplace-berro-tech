import {createReducer} from '@reduxjs/toolkit';
import {addItem, signIn} from './actions';

import {initialState} from './initial';

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn, (state, action) => {
    console.log(action);
  },
  ).addCase(addItem, (state, action) => {
    console.log('TESTANDO O REDUX')
    state.lastSearchs.push(action.payload);
  });
});

